import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
export function CTASection() {
  return (
    <section className="relative py-24 bg-ethos-navy overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ethos-blue rounded-full blur-[128px] opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ethos-teal rounded-full blur-[128px] opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-4xl mx-auto text-center">
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Building Your Global Financial Reputation Today.
          </h2>

          <p className="text-xl text-ethos-slate-300 text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of users who have unlocked borderless financial
            freedom with EthosID.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-ethos-coral hover:bg-ethos-coral-dark text-white font-semibold text-base h-14 px-8 rounded-xl shadow-lg shadow-ethos-coral/20">
                
                Sign Up for Free
              </Button>
            </Link>
            <Link to="/institutions">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold text-base h-14 px-8 rounded-xl bg-transparent">
                
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}