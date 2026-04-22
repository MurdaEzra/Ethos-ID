import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
export function Testimonials() {
  const testimonials = [
  {
    quote:
    'Moving from Brazil to Germany meant starting my credit history from scratch. EthosID allowed me to prove my financial reliability instantly and secure an apartment in days.',
    name: 'Carlos M.',
    role: 'Software Engineer',
    flag: '🇩🇪',
    initials: 'CM',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    quote:
    "As a digital nomad, traditional banking doesn't work for me. My Ethos Score travels with me, making it easy to access financial services anywhere in the world.",
    name: 'Sarah J.',
    role: 'Freelance Designer',
    flag: '🇹🇭',
    initials: 'SJ',
    color: 'bg-teal-100 text-teal-700'
  },
  {
    quote:
    "We use EthosID to verify international applicants for premium rentals. It's reduced our screening time by 80% while providing cryptographically secure guarantees.",
    name: 'David K.',
    role: 'Property Manager',
    flag: '🇬🇧',
    initials: 'DK',
    color: 'bg-emerald-100 text-emerald-700'
  }];

  return (
    <section className="py-24 bg-ethos-slate/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ethos-navy mb-4">
            Trusted by Global Citizens
          </h2>
          <p className="text-lg text-ethos-slate">
            Hear how EthosID is transforming financial mobility for people and
            businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) =>
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
            
              <Card className="h-full border-ethos-slate/10 shadow-sm bg-white relative">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-ethos-slate/10 absolute top-6 right-6" />

                  <p className="text-ethos-slate leading-relaxed mb-8 relative z-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                    
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-ethos-navy flex items-center gap-2">
                        {testimonial.name}{' '}
                        <span className="text-lg">{testimonial.flag}</span>
                      </h4>
                      <p className="text-sm text-ethos-slate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}