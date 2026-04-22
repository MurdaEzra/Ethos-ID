import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, ShieldCheck, Globe2, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-ethos-blue/5 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ethos-blue/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-ethos-teal/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">
            
            <Badge
              variant="outline"
              className="mb-6 bg-white border-ethos-teal/30 text-ethos-teal px-3 py-1 text-sm font-medium">
              
              <ShieldCheck className="w-4 h-4 mr-2 inline-block" />
              Privacy-First Financial Identity
            </Badge>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy leading-tight mb-6">
              Your Financial Reputation,{' '}
              <span className="text-ethos-blue">Everywhere You Go.</span>
            </h1>

            <p className="text-lg md:text-xl text-ethos-slate mb-8 leading-relaxed">
              EthosID turns your financial history into a portable,
              privacy-first Trust Score—accepted globally, verified instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-ethos-coral hover:bg-ethos-coral/90 text-white font-semibold text-base h-14 px-8 rounded-xl shadow-lg shadow-ethos-coral/20">
                  
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-ethos-slate/20 text-ethos-navy hover:bg-ethos-slate/5 font-semibold text-base h-14 px-8 rounded-xl">
                  
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-ethos-slate/10">
              <div>
                <div className="font-heading font-bold text-2xl md:text-3xl text-ethos-navy">
                  50K+
                </div>
                <div className="text-sm text-ethos-slate font-medium mt-1">
                  Active Users
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl md:text-3xl text-ethos-navy">
                  120+
                </div>
                <div className="text-sm text-ethos-slate font-medium mt-1">
                  Countries
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl md:text-3xl text-ethos-navy">
                  99.9%
                </div>
                <div className="text-sm text-ethos-slate font-medium mt-1">
                  Verification Rate
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Abstract Passport/Card Visual */}
            <div className="relative w-full max-w-md aspect-[3/4] md:aspect-square lg:aspect-[3/4] z-10">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-ethos-slate/10 overflow-hidden flex flex-col">
                
                <div className="bg-ethos-navy p-6 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-ethos-teal" />
                    <span className="font-heading font-bold text-lg">
                      EthosID
                    </span>
                  </div>
                  <Globe2 className="w-5 h-5 text-ethos-slate/50" />
                </div>

                <div className="p-8 flex-grow flex flex-col justify-center items-center relative">
                  {/* Score Ring */}
                  <div className="relative w-48 h-48 mb-6">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100">
                      
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f1f5f9"
                        strokeWidth="8" />
                      
                      <motion.circle
                        initial={{
                          strokeDasharray: '0 300'
                        }}
                        animate={{
                          strokeDasharray: '220 300'
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5,
                          ease: 'easeOut'
                        }}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#0D9488"
                        strokeWidth="8"
                        strokeLinecap="round" />
                      
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-medium text-ethos-slate mb-1">
                        Trust Score
                      </span>
                      <span className="font-heading font-bold text-5xl text-ethos-navy">
                        842
                      </span>
                      <span className="text-xs font-semibold text-ethos-emerald mt-1 bg-ethos-emerald/10 px-2 py-0.5 rounded-full">
                        Excellent
                      </span>
                    </div>
                  </div>

                  <div className="w-full space-y-4">
                    <div className="h-2 bg-ethos-slate/10 rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-ethos-slate/10 rounded-full w-1/2 mx-auto" />
                  </div>
                </div>

                <div className="bg-ethos-slate/5 p-4 border-t border-ethos-slate/10 flex justify-between items-center text-sm font-medium text-ethos-slate">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-ethos-emerald" /> ZKP
                    Verified
                  </span>
                  <span>ID: ETH-8924</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-ethos-slate/10 flex items-center gap-3 z-20">
                
                <div className="bg-ethos-blue/10 p-2 rounded-full">
                  <Globe2 className="w-6 h-6 text-ethos-blue" />
                </div>
                <div>
                  <div className="text-xs text-ethos-slate font-medium">
                    Location
                  </div>
                  <div className="font-bold text-ethos-navy text-sm">
                    London, UK
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute -left-10 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-ethos-slate/10 flex items-center gap-3 z-20">
                
                <div className="bg-ethos-emerald/10 p-2 rounded-full">
                  <Activity className="w-6 h-6 text-ethos-emerald" />
                </div>
                <div>
                  <div className="text-xs text-ethos-slate font-medium">
                    Status
                  </div>
                  <div className="font-bold text-ethos-navy text-sm">
                    Real-time Sync
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}