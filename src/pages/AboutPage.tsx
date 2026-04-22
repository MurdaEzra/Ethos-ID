import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Shield, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { usePageTitle } from '../hooks/usePageTitle';
export function AboutPage() {
  usePageTitle('About Us | EthosID');
  const values = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Borderless by Default',
    desc: 'We believe financial identity should travel with you, regardless of where you were born or where you move.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy First',
    desc: "Your data is yours. We use advanced cryptography to ensure you only share what's absolutely necessary."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Empowerment',
    desc: 'We build tools that give individuals control over their financial narrative and reputation.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Trust',
    desc: "Trust is the foundation of finance. We're rebuilding it for the digital, global age."
  }];

  const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    initials: 'SC',
    color: 'bg-ethos-blue/20 text-ethos-blue'
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO & Co-founder',
    initials: 'MJ',
    color: 'bg-ethos-teal/20 text-ethos-teal'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Cryptography',
    initials: 'ER',
    color: 'bg-ethos-emerald/20 text-ethos-emerald'
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    initials: 'DK',
    color: 'bg-ethos-coral/20 text-ethos-coral'
  }];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-24 text-center max-w-4xl">
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
            Building trust for a borderless financial world.
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            EthosID was founded on a simple premise: your financial reputation
            should belong to you, and it should be recognized everywhere.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-ethos-navy text-white py-16 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                50K+
              </div>
              <div className="text-ethos-slate-300 text-slate-300">
                Active Users
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                120+
              </div>
              <div className="text-ethos-slate-300 text-slate-300">
                Countries
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                2M+
              </div>
              <div className="text-ethos-slate-300 text-slate-300">
                Verifications
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                45
              </div>
              <div className="text-ethos-slate-300 text-slate-300">
                Team Members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
            Our Values
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) =>
          <Card key={i} className="border-ethos-slate/10 shadow-sm">
              <CardContent className="p-6 flex gap-4">
                <div className="mt-1 text-ethos-blue">{value.icon}</div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-ethos-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-ethos-slate">{value.desc}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
            Meet the Team
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) =>
          <div key={i} className="text-center">
              <div
              className={`w-32 h-32 mx-auto rounded-full ${member.color} flex items-center justify-center text-3xl font-bold mb-4`}>
              
                {member.initials}
              </div>
              <h3 className="font-heading font-bold text-ethos-navy text-lg">
                {member.name}
              </h3>
              <p className="text-ethos-slate text-sm">{member.role}</p>
            </div>
          )}
        </div>
      </section>
    </div>);

}