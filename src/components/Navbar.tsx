import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'How it Works',
    href: '/how-it-works'
  },
  {
    name: 'Features',
    href: '/features'
  },
  {
    name: 'For Institutions',
    href: '/institutions'
  },
  {
    name: 'Pricing',
    href: '/pricing'
  },
  {
    name: 'Roadmap',
    href: '/roadmap'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${isScrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-6'}`}>
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-ethos-blue text-white p-1.5 rounded-lg">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-ethos-navy">
            EthosID
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.href}
            className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-ethos-blue' : 'text-ethos-slate hover:text-ethos-blue'}`}>
            
              {link.name}
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-ethos-navy font-medium">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-ethos-coral hover:bg-ethos-coral-dark text-white font-medium shadow-sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-ethos-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          
          {isMobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-ethos-slate/10 shadow-lg py-4 px-4 flex flex-col gap-4">
        
          {navLinks.map((link) =>
        <Link
          key={link.name}
          to={link.href}
          className={`text-base font-medium py-2 border-b border-ethos-slate/5 ${location.pathname === link.href ? 'text-ethos-blue' : 'text-ethos-slate'}`}>
          
              {link.name}
            </Link>
        )}
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full justify-center bg-ethos-coral hover:bg-ethos-coral-dark text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      }
    </header>);

}