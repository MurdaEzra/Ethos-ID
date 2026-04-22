import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, CircleDashed, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function RoadmapPage() {
  usePageTitle('Development Roadmap | EthosID');
  const phases = [
  {
    id: 'phase-1',
    title: 'Phase 1: MVP – Read-Only Connectors',
    status: 'Completed',
    statusColor:
    'bg-ethos-emerald/10 text-ethos-emerald border-ethos-emerald/20',
    icon: <CheckCircle2 className="w-5 h-5" />,
    items: [
    'Build integrations with top migration corridors: India→USA, Mexico→USA, Brazil→UK, Kenya→UAE',
    'Fetch historical data read-only',
    'Normalize data into Ethos Score',
    'Build user dashboard: score overview, visualization of historical financial behavior']

  },
  {
    id: 'phase-2',
    title: 'Phase 2: ZKP Credential Issuer',
    status: 'In Progress',
    statusColor: 'bg-ethos-blue/10 text-ethos-blue border-ethos-blue/20',
    icon: <Clock className="w-5 h-5" />,
    items: [
    'Implement proof generation for key claims: Proof of Rent, Proof of Funds',
    'Integrate ZKP libraries: Circom (for zkSNARKs), SnarkyJS',
    'Implement proof verification interface for institutions']

  },
  {
    id: 'phase-3',
    title: 'Phase 3: B2B Integration',
    status: 'Upcoming',
    statusColor: 'bg-ethos-slate/10 text-ethos-slate border-ethos-slate/20',
    icon: <CircleDashed className="w-5 h-5" />,
    items: [
    "Partner with 'Expat-friendly' neobanks: Wise, Revolut, N26, Monzo",
    'Build API endpoints: POST /verify_ethos, GET /user_score',
    'Secure API with OAuth2 and JWT']

  }];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center max-w-4xl">
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
            Development Roadmap
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            Our journey to building the universal, privacy-first financial
            reputation ledger.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-24 relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ethos-slate/10 transform -translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {phases.map((phase, index) =>
          <div
            key={phase.id}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-ethos-slate/10 items-center justify-center z-10">
                <div
                className={`w-4 h-4 rounded-full ${phase.status === 'Completed' ? 'bg-ethos-emerald' : phase.status === 'In Progress' ? 'bg-ethos-blue' : 'bg-ethos-slate'}`} />
              
              </div>

              {/* Content Card */}
              <div
              className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
              
                <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 30 : -30
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
                  duration: 0.5
                }}>
                
                  <Card className="border-ethos-slate/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h2 className="font-heading text-2xl font-bold text-ethos-navy">
                          {phase.title}
                        </h2>
                        <Badge
                        variant="outline"
                        className={`flex items-center gap-1.5 px-3 py-1 ${phase.statusColor}`}>
                        
                          {phase.icon}
                          {phase.status}
                        </Badge>
                      </div>
                      <ul className="space-y-4">
                        {phase.items.map((item, i) =>
                      <li key={i} className="flex items-start gap-3">
                            <div
                          className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${phase.status === 'Completed' ? 'bg-ethos-emerald' : phase.status === 'In Progress' ? 'bg-ethos-blue' : 'bg-ethos-slate'}`} />
                        
                            <span className="text-ethos-slate leading-relaxed">
                              {item}
                            </span>
                          </li>
                      )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-ethos-navy rounded-3xl p-12 text-white">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Want to help us build the future?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-ethos-coral hover:bg-ethos-coral-dark text-white font-semibold px-8 rounded-xl">
                
                Join the Beta <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/institutions">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 rounded-xl bg-transparent">
                
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}