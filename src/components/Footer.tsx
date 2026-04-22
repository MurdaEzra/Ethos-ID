import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0B1120] text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-ethos-blue text-white p-1.5 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                EthosID
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 max-w-xs leading-relaxed">
              The portable financial reputation ledger. Turning your financial
              history into a privacy-first Trust Score accepted globally.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors">
                
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-ethos-teal transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-ethos-teal transition-colors">
                  
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-ethos-teal transition-colors">
                  
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/institutions"
                  className="hover:text-ethos-teal transition-colors">
                  
                  For Institutions
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-ethos-teal transition-colors">
                  
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="hover:text-ethos-teal transition-colors">
                  
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ethos-teal transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} EthosID Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Shield className="w-4 h-4 text-ethos-teal mx-1" /> trust
            for a borderless world.
          </p>
        </div>
      </div>
    </footer>);

}