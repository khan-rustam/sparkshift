import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { logout } from "../store/slices/authSlice";
import { FiPlus, FiLogOut, FiX, FiSend, FiUpload, FiTrash2 } from "react-icons/fi";
import { authAPI } from "../services/api";

interface PortfolioItem {
  _id: string;
  projectName: string;
  category: string;
  description: string;
  projectLink: string;
  imageUrl: string;
}

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      role: string;
    } | null;
    isAuthenticated: boolean;
  };
}

const categories = ["Web Development", "Graphic Design", "Digital Marketing", "Product Photography"];

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<PortfolioItem | null>(null);
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    projectLink: "",
  });

  useEffect(() => {
    // First check if the user is authenticated
    if (!isAuthenticated) {
      toast.error("You must log in to access this page", { id: "auth-access" });
      navigate('/login');
      return;
    }
    
    // Check for admin permissions
    const isAdmin = user?.role === "admin" && authAPI.isAdmin();
    
    if (!isAdmin) {
      // Only show one toast message for any authentication/permission issue
      toast.error("Access denied. You don't have administrator permissions.", { id: "auth-access" });
      
      // If there's an inconsistency between Redux and localStorage, logout
      if (user?.role !== "admin" || !authAPI.isAdmin()) {
        dispatch(logout());
      }
      
      navigate('/');
      return;
    }
    
    // If we get here, user is authenticated and has admin permissions
    fetchPortfolioItems();
  }, [isAuthenticated, user, navigate, dispatch]);

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`);
      const data = await response.json();
      setPortfolioItems(data);
    } catch (error) {
      toast.error("Failed to fetch portfolio items");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      toast.error("Please select an image");
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", selectedImage);
      formDataToSend.append("projectName", formData.projectName);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("projectLink", formData.projectLink);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to save portfolio item");

      toast.success("Project added successfully!");
      setFormData({
        projectName: "",
        category: "",
        description: "",
        projectLink: "",
      });
      setSelectedImage(null);
      setImagePreview("");
      setShowModal(false);
      fetchPortfolioItems();
    } catch (error) {
      toast.error("Failed to save portfolio item");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (item: PortfolioItem) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio/${itemToDelete._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to delete portfolio item");

      toast.success("Project deleted successfully!");
      setShowDeleteModal(false);
      setItemToDelete(null);
      fetchPortfolioItems();
    } catch (error) {
      toast.error("Failed to delete portfolio item");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Portfolio Management</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                setFormData({
                  projectName: "",
                  category: "",
                  description: "",
                  projectLink: "",
                });
                setSelectedImage(null);
                setImagePreview("");
                setShowModal(true);
              }}
              className="flex items-center justify-center px-4 py-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors w-full sm:w-auto"
            >
              <FiPlus className="mr-2" />
              Create New Project
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center px-4 py-2 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors w-full sm:w-auto"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </div>
        </div>

        <div className="bg-[#1a1d25] rounded-lg border border-gray-800 overflow-hidden">
          {portfolioItems.length === 0 ? (
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">No Projects Found</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Start by adding your first project using the "Create New Project" button above.</p>
              <button
                onClick={() => {
                  setFormData({
                    projectName: "",
                    category: "",
                    description: "",
                    projectLink: "",
                  });
                  setSelectedImage(null);
                  setImagePreview("");
                  setShowModal(true);
                }}
                className="inline-flex items-center px-4 py-2 bg-[#7c3aed] text-white rounded-lg hover:bg-[#6d28d9] transition-colors"
              >
                <FiPlus className="mr-2" />
                Create First Project
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-[#2a2d35]">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Description
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {portfolioItems.map((item) => (
                    <tr key={item._id} className="hover:bg-[#2a2d35]/50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-lg object-cover"
                              src={item.imageUrl}
                              alt={item.projectName}
                            />
                          </div>
                          <div className="ml-3 sm:ml-4">
                            <div className="text-sm font-medium text-gray-200">
                              {item.projectName}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 truncate max-w-[200px] sm:max-w-none">
                              {item.projectLink}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden sm:table-cell">
                        {item.category}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-300 hidden md:table-cell">
                        <div className="max-w-xs truncate">{item.description}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDeleteClick(item)}
                          className="text-red-400 hover:text-red-300 flex items-center"
                        >
                          <FiTrash2 className="mr-1" />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Create Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1d25] rounded-2xl shadow-xl w-full max-w-2xl border border-gray-800 my-4 sm:my-8"
            >
              <div className="p-4 sm:p-8 mt-10">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#7c3aed]">Add New Project</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-base sm:text-lg font-medium text-white mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectName: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-2 rounded-xl bg-[#2a2d35] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-[#7c3aed] focus:ring-[#7c3aed] transition-colors text-sm sm:text-base"
                        placeholder="Enter project name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-base sm:text-lg font-medium text-white mb-2">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 rounded-xl bg-[#2a2d35] border-2 border-gray-700 text-white focus:border-[#7c3aed] focus:ring-[#7c3aed] transition-colors appearance-none cursor-pointer text-sm sm:text-base"
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-medium text-white mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 rounded-xl bg-[#2a2d35] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-[#7c3aed] focus:ring-[#7c3aed] transition-colors text-sm sm:text-base"
                      rows={4}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-medium text-white mb-2">
                      Project Link
                    </label>
                    <input
                      type="url"
                      value={formData.projectLink}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectLink: e.target.value,
                        })
                      }
                      className="w-full px-3 sm:px-4 py-2 rounded-xl bg-[#2a2d35] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-[#7c3aed] focus:ring-[#7c3aed] transition-colors text-sm sm:text-base"
                      placeholder="https://example.com" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-medium text-white mb-2">
                      Project Image
                    </label>
                    <div className="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-6 border-2 border-gray-700 border-dashed rounded-xl">
                      <div className="space-y-1 text-center">
                        {imagePreview ? (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="mx-auto h-24 sm:h-32 w-24 sm:w-32 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedImage(null);
                                setImagePreview("");
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                              <FiX size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <FiUpload className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-400">
                              <label
                                htmlFor="image-upload"
                                className="relative cursor-pointer rounded-md font-medium text-[#7c3aed] hover:text-[#6d28d9] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#7c3aed] focus-within:ring-offset-2 focus-within:ring-offset-gray-800"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="image-upload"
                                  name="image-upload"
                                  type="file"
                                  className="sr-only"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="w-full sm:w-auto px-6 py-2 border-2 border-gray-600 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto flex items-center justify-center px-6 py-2 bg-[#7c3aed] text-white rounded-xl hover:bg-[#6d28d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Adding Project...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Add Project
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1d25] rounded-2xl shadow-xl w-full max-w-md border border-gray-800 p-4 sm:p-6"
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-red-100 mb-3 sm:mb-4">
                  <FiTrash2 className="h-5 sm:h-6 w-5 sm:w-6 text-red-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-2">
                  Delete Project
                </h3>
                <p className="text-sm text-gray-400 mb-4 sm:mb-6">
                  Are you sure you want to delete "{itemToDelete?.projectName}"? This action cannot be undone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setItemToDelete(null);
                  }}
                  className="w-full sm:w-auto px-4 py-2 border-2 border-gray-600 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isDeleting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Deleting...
                    </>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
