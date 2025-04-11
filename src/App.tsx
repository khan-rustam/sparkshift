import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Admin from './pages/Admin';
import { useAppSelector } from './store/hooks';
import { authAPI } from "./services/api";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const isAuthenticatedByStorage = authAPI.isAuthenticated();
  const isAdminByStorage = authAPI.isAdmin();

  // Check authentication first
  if (!isAuthenticated && !isAuthenticatedByStorage) {
    toast.error("Please login to access this page", { id: "auth-access" });
    return <Navigate to="/login" />;
  }
  
  // If authenticated but not admin (checking both Redux and localStorage)
  const isNotAdmin = (isAuthenticated && user && user.role !== "admin") || 
                     (isAuthenticatedByStorage && !isAdminByStorage);
                     
  if (isNotAdmin) {
    // Single toast for access denied
    toast.error("Access denied. You do not have administrator permissions.", { id: "auth-access" });
    return <Navigate to="/" />;
  }
  
  // User is admin, allow access
  return <>{children}</>;
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div className="min-h-screen bg-dark">
            <Navbar />
            <AnimatePresence mode="wait">
              <Suspense fallback={<div className="min-h-screen bg-dark flex items-center justify-center"><Loading size="lg" /></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <Admin />
                      </AdminRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
            <Footer />
          </div>
          <Toaster 
            position="top-right" 
            reverseOrder={true} 
            toastOptions={{
              duration: 3000,
              // Custom styling for better visibility
              style: {
                background: '#1a1d25',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
            // Prevent duplicate toasts
            gutter={8}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
