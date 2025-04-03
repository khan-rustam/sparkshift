import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Admin from './pages/Admin';
import { useAppSelector } from './store/hooks';

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
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
                      <PrivateRoute>
                        <Admin />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
            <Footer />
          </div>
          <Toaster position="top-right" reverseOrder={true} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
