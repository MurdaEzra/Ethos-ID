import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export function LoginPage() {
  const navigate = useNavigate();
  usePageTitle('Log In | EthosID');

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-10">
            <h1 className="font-heading text-4xl font-bold text-ethos-navy mb-3">
              Welcome back
            </h1>
            <p className="text-ethos-slate text-lg">
              Enter your credentials to access your global identity.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard');
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ethos-navy" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-ethos-slate/60" />
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="flex h-12 w-full rounded-xl border border-ethos-slate/20 bg-ethos-slate/5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ethos-blue focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-ethos-navy" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-ethos-blue hover:text-ethos-blue-dark transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-ethos-slate/60" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="flex h-12 w-full rounded-xl border border-ethos-slate/20 bg-ethos-slate/5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ethos-blue focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <Button
              className="w-full h-12 bg-ethos-navy hover:bg-ethos-navy/90 text-white shadow-lg rounded-xl flex items-center justify-center gap-2 group"
              type="submit"
            >
              Sign In to EthosID
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 text-center text-ethos-slate">
            Don't have an account?{' '}
            <Link to="/signup" className="text-ethos-blue font-semibold hover:text-ethos-blue-dark transition-colors">
              Create an account
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Premium Visual */}
      <div className="hidden lg:flex w-1/2 bg-ethos-navy relative overflow-hidden items-center justify-center">
        {/* Abstract Background Vectors */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-ethos-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-ethos-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="z-10 text-white max-w-lg px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 to-white/5 shadow-2xl"
          >
            <div className="bg-ethos-navy/40 backdrop-blur-3xl rounded-3xl p-10 border border-white/10">
              <Shield className="w-12 h-12 text-ethos-teal mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4 leading-tight">
                Your Global Financial Identity in One Place
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Unlock frictionless onboarding, verifiable credentials, and true financial sovereignty built for the modern era.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}