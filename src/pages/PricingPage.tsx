import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter } from
'../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function PricingPage() {
  usePageTitle('Pricing | EthosID');
  const plans = [
  {
    name: 'Individual',
    price: 'Free',
    description: 'For global citizens building their financial reputation.',
    features: [
    'Global Ethos Score',
    'Connect up to 3 bank accounts',
    'Generate unlimited ZKP proofs',
    'Basic community vouching'],

    cta: 'Sign Up Free',
    link: '/signup',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For digital nomads and frequent movers.',
    features: [
    'Everything in Individual',
    'Connect unlimited accounts',
    'Priority verification',
    'Premium partner discounts',
    'Dedicated support'],

    cta: 'Get Pro',
    link: '/signup',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For institutions verifying applicants.',
    features: [
    'API Access',
    'Custom verification rules',
    'White-label options',
    'SLA guarantees',
    'Dedicated account manager'],

    cta: 'Contact Sales',
    link: '/institutions',
    highlight: false
  }];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-3xl">
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
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-ethos-navy mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            Whether you're an individual building your reputation or an
            institution verifying users, we have a plan for you.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) =>
          <Card
            key={i}
            className={`relative flex flex-col ${plan.highlight ? 'border-ethos-blue shadow-lg scale-105 z-10' : 'border-ethos-slate/10 shadow-sm'}`}>
            
              {plan.highlight &&
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ethos-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
            }
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-heading text-2xl text-ethos-navy">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-ethos-slate h-10">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-ethos-navy">
                    {plan.price}
                  </span>
                  {plan.period &&
                <span className="text-ethos-slate">{plan.period}</span>
                }
                </div>
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, j) =>
                <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                    className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-ethos-blue' : 'text-ethos-teal'}`} />
                  
                      <span className="text-sm text-ethos-slate">
                        {feature}
                      </span>
                    </li>
                )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={plan.link} className="w-full">
                  <Button
                  className={`w-full ${plan.highlight ? 'bg-ethos-blue hover:bg-ethos-blue-dark text-white' : 'bg-ethos-slate/10 text-ethos-navy hover:bg-ethos-slate/20'}`}>
                  
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </div>);

}