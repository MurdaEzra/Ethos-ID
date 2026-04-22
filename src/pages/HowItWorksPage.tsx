import React from 'react';
import { motion } from 'framer-motion';
import {
  Link2,
  Shield,
  Globe,
  CheckCircle2,
  Lock,
  Database,
  ArrowRight,
  Server,
  Cpu,
  Network } from
'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function HowItWorksPage() {
  usePageTitle('How It Works | EthosID');
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
            The Technology Behind Global Trust
          </h1>
          <p className="text-xl text-ethos-slate leading-relaxed">
            EthosID uses a three-layer architecture to transform your fragmented
            financial history into a unified, privacy-preserving global
            identity.
          </p>
        </motion.div>
      </section>

      {/* Detailed Steps */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="space-y-32">
          {/* LAYER 1: INGESTION */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                  once: true
                }}>
                
                <div className="w-16 h-16 rounded-2xl bg-ethos-blue/10 flex items-center justify-center mb-6">
                  <Link2 className="w-8 h-8 text-ethos-blue" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
                  1. Ingestion Layer (Connecting the Past)
                </h2>
                <p className="text-lg text-ethos-slate mb-6">
                  We securely connect to your existing financial institutions
                  using Open Banking APIs. This allows us to scan your
                  historical data—rent payments, utility bills, salary deposits,
                  and bank balances—without ever storing your login credentials.
                </p>
              </motion.div>
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
                  once: true
                }}>
                
                <Card className="bg-ethos-slate/5 border-ethos-slate/10 shadow-inner">
                  <CardContent className="p-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center gap-3">
                        <Database className="text-ethos-slate" />{' '}
                        <span>Bank of America</span>
                      </div>
                      <CheckCircle2 className="text-ethos-emerald" />
                    </div>
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center gap-3">
                        <Database className="text-ethos-slate" />{' '}
                        <span>HSBC UK</span>
                      </div>
                      <CheckCircle2 className="text-ethos-emerald" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Ingestion Deep Dive */}
            <motion.div
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
              }}>
              
              <div className="bg-white border border-ethos-slate/10 rounded-3xl p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-ethos-navy mb-6 flex items-center gap-2">
                  <Server className="text-ethos-blue" /> Ingestion Deep Dive
                </h3>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-ethos-navy mb-3">
                      Global API Integrations
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-ethos-slate/5 p-3 rounded-lg">
                        <span className="font-semibold text-ethos-navy">
                          US:
                        </span>{' '}
                        Plaid, Finicity
                      </div>
                      <div className="bg-ethos-slate/5 p-3 rounded-lg">
                        <span className="font-semibold text-ethos-navy">
                          UK/EU:
                        </span>{' '}
                        TrueLayer, Tink
                      </div>
                      <div className="bg-ethos-slate/5 p-3 rounded-lg">
                        <span className="font-semibold text-ethos-navy">
                          India:
                        </span>{' '}
                        UPI Aggregators
                      </div>
                      <div className="bg-ethos-slate/5 p-3 rounded-lg">
                        <span className="font-semibold text-ethos-navy">
                          Kenya:
                        </span>{' '}
                        M-Pesa, KCB
                      </div>
                    </div>

                    <h4 className="font-bold text-ethos-navy mb-3">
                      Standardization Engine
                    </h4>
                    <p className="text-sm text-ethos-slate leading-relaxed">
                      Our AI/ML engine normalizes different currencies,
                      accounting practices, and local rules. A consistent
                      rent-paying user in India maps equivalently to a
                      consistent rent-paying user in Germany, weighted by local
                      norms like income volatility.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-ethos-navy mb-3">
                      Normalized JSON Schema
                    </h4>
                    <Card className="bg-ethos-navy border-ethos-navy text-white">
                      <CardContent className="p-4 font-mono text-xs overflow-x-auto">
                        <pre className="text-slate-300">
                          {`{
  "user_id": "uuid",
  "country": "string",
  "income": [
    {"date": "YYYY-MM-DD", "amount": 5000}
  ],
  "rent_payments": [
    {"date": "YYYY-MM-DD", "amount": 1200}
  ],
  "utilities": [
    {"date": "YYYY-MM-DD", "type": "electricity", "amount": 100}
  ]
}`}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LAYER 2: PRIVACY */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                  once: true
                }}
                className="order-2 md:order-1">
                
                <Card className="bg-ethos-navy text-white border-ethos-navy shadow-xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-ethos-teal/20 rounded-bl-full blur-2xl" />
                    <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                      <Lock className="text-ethos-teal" /> ZKP Verification
                    </h3>
                    <div className="space-y-4 font-mono text-sm">
                      <div className="bg-black/30 p-3 rounded-lg text-ethos-slate-300">
                        <div>
                          <span className="text-ethos-teal">Query:</span> Income
                          &gt; $5000/mo
                        </div>
                        <div className="mt-2">
                          <span className="text-ethos-emerald">Result:</span>{' '}
                          TRUE
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Underlying data hidden
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                  once: true
                }}
                className="order-1 md:order-2">
                
                <div className="w-16 h-16 rounded-2xl bg-ethos-teal/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-ethos-teal" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
                  2. Privacy Layer (Zero-Knowledge Proofs)
                </h2>
                <p className="text-lg text-ethos-slate mb-6">
                  We use Zero-Knowledge Proofs (ZKP) to verify your financial
                  reliability without exposing your actual data. A landlord or
                  bank can verify you meet their criteria without ever seeing
                  your actual salary or bank statements.
                </p>
              </motion.div>
            </div>

            {/* ZKP Deep Dive */}
            <motion.div
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
              }}>
              
              <div className="bg-white border border-ethos-slate/10 rounded-3xl p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-ethos-navy mb-6 flex items-center gap-2">
                  <Cpu className="text-ethos-teal" /> ZKP Technology Deep Dive
                </h3>

                <p className="text-ethos-slate mb-8">
                  Utilizing advanced cryptographic frameworks like{' '}
                  <strong>zkSNARKs</strong> and <strong>zkSTARKs</strong>, we
                  generate proofs that are fast and lightweight enough to be
                  processed directly on smartphones.
                </p>

                <div className="bg-ethos-slate/5 rounded-2xl p-6 overflow-x-auto">
                  <div className="flex items-center justify-between min-w-[600px] text-sm font-medium text-ethos-navy">
                    <div className="text-center w-32">
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-2 border border-ethos-slate/10">
                        User submits claim
                      </div>
                    </div>
                    <ArrowRight className="text-ethos-teal" />
                    <div className="text-center w-32">
                      <div className="bg-ethos-teal/10 text-ethos-teal p-3 rounded-xl mb-2 border border-ethos-teal/20">
                        ZKP Engine converts data
                      </div>
                    </div>
                    <ArrowRight className="text-ethos-teal" />
                    <div className="text-center w-32">
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-2 border border-ethos-slate/10">
                        Proof stored on ledger
                      </div>
                    </div>
                    <ArrowRight className="text-ethos-teal" />
                    <div className="text-center w-32">
                      <div className="bg-white p-3 rounded-xl shadow-sm mb-2 border border-ethos-slate/10">
                        Verifier checks proof
                      </div>
                    </div>
                    <ArrowRight className="text-ethos-teal" />
                    <div className="text-center w-32">
                      <div className="bg-ethos-emerald/10 text-ethos-emerald p-3 rounded-xl mb-2 border border-ethos-emerald/20 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Yes/No
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LAYER 3: TRUST LEDGER */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                  once: true
                }}>
                
                <div className="w-16 h-16 rounded-2xl bg-ethos-emerald/10 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-ethos-emerald" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-4">
                  3. Trust Ledger Layer (Immutable Identity)
                </h2>
                <p className="text-lg text-ethos-slate mb-6">
                  Your Ethos Score is a dynamic, portable ledger. It updates in
                  real-time as you make transactions, pay rent, or earn salary.
                  Because it's standardized, a bank in Germany can instantly
                  understand your financial reputation built in Brazil.
                </p>
              </motion.div>
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
                  once: true
                }}>
                
                <div className="relative aspect-square max-w-md mx-auto bg-ethos-slate/5 rounded-full border border-ethos-slate/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjE1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPjwvc3ZnPg==')] bg-center bg-no-repeat opacity-50" />
                  <div className="bg-white p-8 rounded-full shadow-xl z-10 relative">
                    <div className="text-center">
                      <div className="text-sm text-ethos-slate font-medium mb-1">
                        Global Trust Score
                      </div>
                      <div className="font-heading font-bold text-6xl text-ethos-navy">
                        842
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ledger Deep Dive */}
            <motion.div
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
              }}>
              
              <div className="bg-white border border-ethos-slate/10 rounded-3xl p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-ethos-navy mb-6 flex items-center gap-2">
                  <Network className="text-ethos-emerald" /> Trust Ledger
                  Architecture
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-ethos-navy mb-2">
                      Blockchain Infrastructure
                    </h4>
                    <p className="text-sm text-ethos-slate">
                      Built on decentralized networks like Ethereum L2, Polygon,
                      or private Hyperledger Fabric to ensure immutable history
                      and auditability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-ethos-navy mb-2">
                      What's Stored
                    </h4>
                    <p className="text-sm text-ethos-slate">
                      Only proofs of transactions, verification timestamps, and
                      metadata are stored.{' '}
                      <strong>
                        Actual financial data is never stored on the ledger.
                      </strong>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-ethos-navy mb-2">
                      Community Vouch System
                    </h4>
                    <p className="text-sm text-ethos-slate">
                      Existing users can vouch for newcomers by staking digital
                      collateral, adding a social layer of trust that
                      complements cryptographic proofs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-ethos-blue/5 rounded-3xl p-12 border border-ethos-blue/10">
          <h2 className="font-heading text-3xl font-bold text-ethos-navy mb-6">
            Ready to own your financial reputation?
          </h2>
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-ethos-coral hover:bg-ethos-coral-dark text-white font-semibold px-8 rounded-xl">
              
              Create Your EthosID <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}