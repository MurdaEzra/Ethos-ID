import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ForInstitutions } from '../components/ForInstitutions';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Code, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function InstitutionsPage() {
  usePageTitle('For Institutions | EthosID');
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-12 text-center max-w-4xl">
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
            Verify global applicants in seconds.
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            EthosID provides banks, landlords, and employers with
            cryptographically secure, instant verification of a user's global
            financial reputation.
          </p>
        </motion.div>
      </section>

      {/* Main Component */}
      <ForInstitutions />

      {/* Integration Steps */}
      <section className="container mx-auto px-4 md:px-6 py-24 border-t border-ethos-slate/10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
            Seamless Integration
          </h2>
          <p className="text-lg text-ethos-slate max-w-2xl mx-auto">
            Integrate EthosID into your existing underwriting or screening
            workflows with our developer-friendly API.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
          {
            icon: <Code />,
            title: '1. Connect API',
            desc: 'Add our REST API or SDK to your application in under an hour.'
          },
          {
            icon: <Zap />,
            title: '2. Request Proof',
            desc: 'Ask users to verify specific criteria (e.g., income > $5k) via the EthosID app.'
          },
          {
            icon: <ShieldCheck />,
            title: '3. Instant Verification',
            desc: 'Receive cryptographically guaranteed Yes/No answers instantly.'
          }].
          map((step, i) =>
          <Card key={i} className="bg-white border-ethos-slate/10 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-ethos-blue/10 text-ethos-blue rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-ethos-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-ethos-slate">{step.desc}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* API Reference */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
            API Reference
          </h2>
          <p className="text-lg text-ethos-slate max-w-2xl mx-auto">
            Secured with OAuth2 and JWT authentication. Built for scale with
            99.99% uptime SLA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* POST /verify_ethos */}
          <Card className="bg-ethos-navy border-ethos-navy text-white overflow-hidden shadow-xl">
            <CardHeader className="bg-black/20 border-b border-white/10 pb-4">
              <CardTitle className="font-mono text-sm flex items-center gap-2 text-ethos-teal">
                <span className="bg-ethos-teal/20 px-2 py-1 rounded text-ethos-teal">
                  POST
                </span>
                /verify_ethos
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2">{'// Request'}</div>
              <pre className="text-slate-300 overflow-x-auto mb-6">
                {`{
  "user_id": "usr_8f92a1b",
  "criteria": {
    "income_min": 5000,
    "currency": "USD",
    "no_defaults_months": 24
  }
}`}
              </pre>
              <div className="text-slate-400 mb-2">
                {'// Response (200 OK)'}
              </div>
              <pre className="text-ethos-teal-light overflow-x-auto">
                {`{
  "verified": true,
  "proof_id": "prf_a3c8e1",
  "claims": {
    "income_min": true,
    "no_defaults": true
  },
  "timestamp": "2026-04-07T09:00:00Z"
}`}
              </pre>
            </CardContent>
          </Card>

          {/* GET /user_score */}
          <Card className="bg-ethos-navy border-ethos-navy text-white overflow-hidden shadow-xl">
            <CardHeader className="bg-black/20 border-b border-white/10 pb-4">
              <CardTitle className="font-mono text-sm flex items-center gap-2 text-ethos-blue">
                <span className="bg-ethos-blue/20 px-2 py-1 rounded text-ethos-blue-light">
                  GET
                </span>
                /user_score
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2">{'// Request'}</div>
              <pre className="text-slate-300 overflow-x-auto mb-6">
                {`GET /v1/user_score?id=usr_8f92a1b
Authorization: Bearer eyJhbG...`}
              </pre>
              <div className="text-slate-400 mb-2">
                {'// Response (200 OK)'}
              </div>
              <pre className="text-ethos-blue-light overflow-x-auto">
                {`{
  "score": 842,
  "tier": "Excellent",
  "last_updated": "2026-04-07T09:00:00Z",
  "vouch_count": 3
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="container mx-auto px-4 md:px-6 mb-24 text-center">
        <h2 className="font-heading text-2xl font-bold text-ethos-navy mb-8">
          Expat-friendly neobank partners
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['Wise', 'Revolut', 'N26', 'Monzo'].map((partner) =>
          <div
            key={partner}
            className="text-2xl md:text-4xl font-heading font-bold text-ethos-slate">
            
              {partner}
            </div>
          )}
        </div>
        <p className="text-sm text-ethos-slate mt-8">And growing...</p>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-ethos-navy rounded-3xl p-12 text-white">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to upgrade your verification process?
          </h2>
          <Link to="/pricing">
            <Button
              size="lg"
              className="bg-ethos-coral hover:bg-ethos-coral-dark text-white font-semibold px-8 rounded-xl">
              
              View Enterprise Pricing <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}