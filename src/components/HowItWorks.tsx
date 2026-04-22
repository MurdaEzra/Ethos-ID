import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link2, Shield, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
export function HowItWorks() {
  const steps = [
  {
    number: '01',
    title: 'Connecting Your Past',
    description:
    'Scans global financial history (rent, bills, salary, bank balances) through Open Banking APIs.',
    icon: <Link2 className="w-8 h-8 text-ethos-blue" />,
    color: 'bg-ethos-blue/10',
    borderColor: 'border-ethos-blue/20'
  },
  {
    number: '02',
    title: 'Privacy by Design',
    description:
    'Uses Zero-Knowledge Proofs (ZKP) to prove your financial reliability without exposing sensitive data.',
    icon: <Shield className="w-8 h-8 text-ethos-teal" />,
    color: 'bg-ethos-teal/10',
    borderColor: 'border-ethos-teal/20'
  },
  {
    number: '03',
    title: 'Real-Time, Global Trust',
    description:
    'Updates your EthosID with every transaction—your financial reputation is always current, wherever you are.',
    icon: <Globe className="w-8 h-8 text-ethos-emerald" />,
    color: 'bg-ethos-emerald/10',
    borderColor: 'border-ethos-emerald/20'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ethos-navy mb-4">
            How EthosID Works
          </h2>
          <p className="text-lg text-ethos-slate">
            A seamless three-layer architecture that transforms your fragmented
            financial history into a unified, privacy-preserving global
            identity.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-ethos-blue/20 via-ethos-teal/20 to-ethos-emerald/20 z-0" />

          {steps.map((step, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative z-10">
            
              <Card className="h-full border-ethos-slate/10 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                  className={`w-24 h-24 rounded-2xl ${step.color} ${step.borderColor} border flex items-center justify-center mb-6 relative`}>
                  
                    <span className="absolute -top-3 -right-3 bg-ethos-navy text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
                      {step.number}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ethos-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ethos-slate leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}