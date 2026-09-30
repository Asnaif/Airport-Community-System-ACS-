'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/auth-store';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email.trim()) newErrors.email = 'Please enter your email';
    if (!password.trim()) newErrors.password = 'Please enter your password';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));

    login({
      id: '1',
      name: 'Admin User',
      email,
      role: 'admin',
    });

    toast.success('Welcome back! Login successful.');
    router.push('/dashboard');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-primary-900/40" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">
        {/* Logo & Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4 shadow-lg shadow-primary-500/30">
            <Plane className="w-8 h-8 text-white -rotate-45" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">
            AIRPORT
          </h1>
          <h2 className="text-lg font-medium text-white/70 tracking-widest mt-1">
            COMMUNITY SYSTEM
          </h2>
        </motion.div>

        {/* Login Card — Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-[400px] rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] px-7 py-8 shadow-2xl"
        >
          {/* Card Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-white">Welcome Back</h2>
            <p className="mt-1 text-xs text-white/50">Enter your credentials to sign in</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/70">
                Email <span className="text-red-400">*</span>
              </label>
              {errors.email && (
                <p className="mb-1 text-[10px] font-medium text-red-400">{errors.email}</p>
              )}
              <div className="flex items-center gap-3 border border-white/[0.15] rounded-xl px-4 py-3 bg-white/[0.05] focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400/30 transition-all duration-300">
                <Mail size={18} className="text-white/40 shrink-0" />
                <input
                  type="email"
                  placeholder="admin@airlines.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: '' })); }}
                  className="w-full outline-none text-sm text-white placeholder-white/30 bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/70">
                Password <span className="text-red-400">*</span>
              </label>
              {errors.password && (
                <p className="mb-1 text-[10px] font-medium text-red-400">{errors.password}</p>
              )}
              <div className="flex items-center gap-3 border border-white/[0.15] rounded-xl px-4 py-3 bg-white/[0.05] focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400/30 transition-all duration-300">
                <Lock size={18} className="text-white/40 shrink-0" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: '' })); }}
                  className="w-full outline-none text-sm text-white placeholder-white/30 bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/40 hover:text-white/60 transition cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-1.5">
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 cursor-pointer accent-primary-500 rounded" />
                <span className="text-[11px] text-white/50">Keep me logged in</span>
              </label>
              <button type="button" className="text-[11px] text-primary-400 hover:text-primary-300 transition cursor-pointer">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-1 w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </motion.div>

        {/* Create Account */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 h-11 w-full max-w-[400px] rounded-xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm text-xs font-semibold text-white/80 shadow-lg transition-all duration-200 hover:bg-white/[0.1] hover:text-white cursor-pointer"
        >
          Create an Account
        </motion.button>

        {/* Copyright */}
        <p className="mt-6 text-center text-[10px] text-white/40">
          (c) 2024 Airport Community System. All rights reserved.
        </p>
      </div>
    </div>
  );
}
