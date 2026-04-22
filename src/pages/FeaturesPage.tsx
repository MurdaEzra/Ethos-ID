import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  RefreshCw,
  Building2,
  Users,
  Scale,
  ArrowRight } from
'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function FeaturesPage() {
  usePageTitle('Features | EthosID');
  const features = [
  {
    icon: <Globe className="w-8 h-8 text-ethos-blue" />,
    title: 'Global Portability',
    description:
    "Your financial history travels with you across borders seamlessly. Whether you're moving from London to New York, or Tokyo to Berlin, your Ethos Score is instantly recognized and accepted by local institutions.",
    color: 'bg-ethos-blue/10'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-ethos-teal" />,
    title: 'Zero-Knowledge Proofs',
    description:
    'Share cryptographic proofs of reliability, not sensitive underlying data. Prove you meet income or credit requirements without ever exposing your actual bank balances, transaction history, or salary details.',
    color: 'bg-ethos-teal/10'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-ethos-emerald" />,
    title: 'Real-Time Updates',
    description:
    'Your Ethos Score evolves dynamically as your financial habits do. Every rent payment, salary deposit, and settled bill is instantly reflected in your ledger, ensuring your reputation is always up-to-date.',
    color: 'bg-ethos-emerald/10'
  },
  {
    icon: <Building2 className="w-8 h-8 text-ethos-coral" />,
    title: 'B2B Trust-as-a-Service',
    description:
    'Banks, landlords, and employers can verify users instantly with absolute certainty. Our API integrates directly into existing underwriting and screening workflows, reducing verification time from days to seconds.',
    color: 'bg-ethos-coral/10'
  },
  {
    icon: <Users className="w-8 h-8 text-ethos-blue" />,
    title: 'Vouch System',
    description:
    'Community-driven trust backed by digital collateral and reputation. Users with high Ethos Scores can vouch for newcomers, staking a portion of their reputation to help others bootstrap their financial identity.',
    color: 'bg-ethos-blue/10'
  },
  {
    icon: <Scale className="w-8 h-8 text-ethos-teal" />,
    title: 'Universal Standardization',
    description:
    'Different countries, different currencies, one unified Ethos Score. We normalize complex global financial data into a single, easy-to-understand metric that transcends local credit bureau limitations.',
    color: 'bg-ethos-teal/10'
  }];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-4xl">
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
            duration: 0.5
          }}>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy mb-6">
            Everything you need for borderless finance.
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            Discover the powerful features that make EthosID the most secure and
            portable financial identity platform in the world.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
            
              <Card className="h-full border-ethos-slate/10 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group">
                <CardContent className="p-8">
                  <div
                  className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-ethos-navy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-ethos-slate leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-ethos-navy rounded-3xl p-12 text-white">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Experience the future of financial identity.
          </h2>
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-ethos-coral hover:bg-ethos-coral-dark text-white font-semibold px-8 rounded-xl">
              
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}