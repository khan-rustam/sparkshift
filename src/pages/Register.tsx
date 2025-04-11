import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/slices/authSlice';
import type { AppDispatch, RootState } from '../store/store';
import { authAPI } from '../services/api';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  // New state for OTP verification
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [tempEmail, setTempEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      // Set loading state for OTP sending
      setIsSendingOtp(true);
      
      // Step 1: Request registration
      await authAPI.sendRegistrationOTP(formData.email);
      
      // Store email temporarily
      setTempEmail(formData.email);
      setShowOtpForm(true);
      toast.success('OTP sent to your email. Please verify to complete registration.');
    } catch (error: any) {
      toast.error(error.message || 'Registration failed');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsVerifying(true);

    try {
      // Complete registration with OTP
      const result = await dispatch(register({
        name: tempEmail.split('@')[0], // Using email prefix as name
        email: tempEmail,
        password: formData.password,
        otp: otp
      })).unwrap();
      
      toast.success('Account verified and registered successfully!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error: any) {
      toast.error(error.message || 'Verification failed');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and limit to 6 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  const handleResendOtp = async () => {
    try {
      setIsSendingOtp(true);
      await authAPI.sendRegistrationOTP(tempEmail);
      toast.success('New OTP sent to your email');
    } catch (error: any) {
      toast.error(error.message || 'Failed to resend OTP');
    } finally {
      setIsSendingOtp(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-8 max-w-md w-full"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {showOtpForm ? 'Verify Your Email' : 'Create Account'}
        </motion.h2>

        {!showOtpForm ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         focus:outline-none focus:border-primary transition-colors"
                placeholder="Create a password"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         focus:outline-none focus:border-primary transition-colors"
                placeholder="Confirm your password"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              type="submit"
              className="btn-primary w-full"
              disabled={isLoading || isSendingOtp}
            >
              {isSendingOtp ? (
                <>
                  <span className="inline-block mr-2 h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Sending OTP...
                </>
              ) : isLoading ? (
                <>
                  <span className="inline-block mr-2 h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : 'Continue'}
            </motion.button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-center text-gray-400 mb-4">
                We've sent a verification code to <strong>{tempEmail}</strong>. 
                Please enter the 6-digit code to verify your email.
              </p>
              <label htmlFor="otp" className="block text-sm font-medium mb-2">
                Verification Code
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                required
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         focus:outline-none focus:border-primary transition-colors text-center text-2xl tracking-widest"
                placeholder="000000"
                autoComplete="off"
                maxLength={6}
              />
            </motion.div>

            <div className="flex justify-center">
              <motion.button
                type="button"
                className="text-sm text-primary hover:underline"
                onClick={handleResendOtp}
                disabled={isSendingOtp}
              >
                {isSendingOtp ? (
                  <>
                    <span className="inline-block mr-1 h-3 w-3 border-2 border-primary/40 border-t-primary rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : "Didn't receive code? Resend"}
              </motion.button>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="btn-primary w-full"
              disabled={isVerifying || otp.length !== 6}
            >
              {isVerifying ? (
                <>
                  <span className="inline-block mr-2 h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Verifying...
                </>
              ) : 'Verify & Create Account'}
            </motion.button>
          </form>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register; 