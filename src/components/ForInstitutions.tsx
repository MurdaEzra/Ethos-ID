import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
export function ForInstitutions() {
  const benefits = [
  'Reduce verification time from days to seconds',
  'Lower compliance costs with automated ZKP checks',
  'Access a global pool of pre-verified, high-trust users'];

  return (
    <section id="institutions" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}>
            
            <div className="flex items-center gap-2 text-ethos-blue font-semibold mb-4">
              <Building className="w-5 h-5" />
              <span>B2B Solutions</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ethos-navy mb-6 leading-tight">
              Built for Banks, Landlords & Employers
            </h2>

            <p className="text-lg text-ethos-slate mb-8 leading-relaxed">
              Stop relying on fragmented local credit bureaus. EthosID provides
              instant, cryptographically secure verification of a user's global
              financial reputation, saving you time and reducing risk.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) =>
              <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-ethos-teal shrink-0 mt-0.5" />
                  <span className="text-ethos-navy font-medium">{benefit}</span>
                </li>
              )}
            </ul>

            <Button
              size="lg"
              className="bg-ethos-navy hover:bg-ethos-navy/90 text-white font-semibold text-base h-14 px-8 rounded-xl">
              
              Explore Institution API
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative">
            
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ethos-blue/5 to-ethos-teal/5 rounded-3xl transform rotate-3 scale-105 -z-10" />

            <Card className="border-ethos-slate/10 shadow-xl overflow-hidden bg-white">
              {/* Mockup Header */}
              <div className="bg-ethos-slate/5 border-b border-ethos-slate/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-medium text-ethos-slate bg-white px-3 py-1 rounded-md border border-ethos-slate/10 shadow-sm">
                  partner.ethosid.com/verify
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-ethos-navy mb-1">
                      Applicant Verification
                    </h3>
                    <p className="text-sm text-ethos-slate">
                      Request ID: REQ-2026-89A
                    </p>
                  </div>
                  <Badge className="bg-ethos-emerald/10 text-ethos-emerald hover:bg-ethos-emerald/20 border-0 px-3 py-1">
                    <ShieldCheck className="w-4 h-4 mr-1.5" />
                    Verified
                  </Badge>
                </div>

                <div className="bg-ethos-slate/5 rounded-2xl p-6 mb-6 flex items-center gap-6">
                  {/* Mini Score Ring */}
                  <div className="relative w-24 h-24 shrink-0">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100">
                      
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="10" />
                      
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#0D9488"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="240 300" />
                      
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-heading font-bold text-2xl text-ethos-navy">
                        842
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-bold text-ethos-navy text-lg mb-1">
                      Elena Rodriguez
                    </h4>
                    <p className="text-sm text-ethos-slate mb-3">
                      Global Trust Score
                    </p>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs font-normal border-ethos-slate/20">
                        
                        Income Verified
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs font-normal border-ethos-slate/20">
                        
                        No Defaults
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-ethos-navy text-sm uppercase tracking-wider">
                    Zero-Knowledge Proofs
                  </h4>
                  <Separator />

                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-ethos-slate">
                      {'Income > $5,000/mo'}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-ethos-emerald" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-ethos-slate">
                      Consistent Rent Payment (24mo)
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-ethos-emerald" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-ethos-slate">
                      Identity Verification
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-ethos-emerald" />
                  </div>
                </div>

                <Button className="w-full mt-8 bg-ethos-blue hover:bg-ethos-blue-dark text-white">
                  Approve Applicant
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>);

}