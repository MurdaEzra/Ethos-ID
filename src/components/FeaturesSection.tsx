import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  RefreshCw,
  Building2,
  Users,
  Scale } from
'lucide-react';
import { Card, CardContent } from './ui/card';
interface FeaturesSectionProps {
  limit?: number;
}
export function FeaturesSection({ limit }: FeaturesSectionProps) {
  const allFeatures = [
  {
    icon: <Globe className="w-6 h-6 text-ethos-blue" />,
    title: 'Global Portability',
    description: 'Your financial history travels with you.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-ethos-teal" />,
    title: 'Zero-Knowledge Proofs',
    description: 'Share proofs, not sensitive data.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-ethos-emerald" />,
    title: 'Real-Time Updates',
    description: 'Your Ethos Score evolves as you do.'
  },
  {
    icon: <Building2 className="w-6 h-6 text-ethos-coral" />,
    title: 'B2B Trust-as-a-Service',
    description: 'Banks and institutions verify users instantly.'
  },
  {
    icon: <Users className="w-6 h-6 text-ethos-blue" />,
    title: 'Vouch System',
    description: 'Community-driven trust with digital collateral.'
  },
  {
    icon: <Scale className="w-6 h-6 text-ethos-teal" />,
    title: 'Universal Standardization',
    description: 'Different countries, one Ethos Score.'
  }];

  const features = limit ? allFeatures.slice(0, limit) : allFeatures;
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section id="features" className="py-24 bg-ethos-slate/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ethos-navy mb-4">
            Powerful Features for a Borderless World
          </h2>
          <p className="text-lg text-ethos-slate">
            Built on advanced cryptography and open banking standards to deliver
            unparalleled security and convenience.
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {features.map((feature, index) =>
          <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-transparent hover:border-ethos-slate/10 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group cursor-default">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-ethos-slate/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ethos-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-ethos-slate leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}