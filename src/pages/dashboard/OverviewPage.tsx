import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Link2, Activity, ChevronRight, FileCheck, Globe2, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { mpesaApi } from '../../services/api/mpesa';

export function OverviewPage() {
  const recentActivity = [
    { type: 'verification', title: 'Income Verification', status: 'success', time: '2 hours ago', detail: 'Proof of income > $5,000/mo' },
    { type: 'connection', title: 'Bank Connected', status: 'success', time: '1 day ago', detail: 'HSBC UK linked successfully' },
    { type: 'score', title: 'Score Updated', status: 'info', time: '2 days ago', detail: 'Score increased by 12 points' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Score Card */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-ethos-slate/10 shadow-sm overflow-hidden">
            <div className="bg-ethos-navy p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300 mb-1">Your Ethos Score</p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading font-bold text-5xl">842</span>
                    <Badge className="bg-ethos-emerald/20 text-ethos-emerald border-0">Excellent</Badge>
                  </div>
                </div>
                <div className="relative w-28 h-28 hidden sm:block">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <motion.circle
                      initial={{ strokeDasharray: '0 300' }}
                      animate={{ strokeDasharray: '220 300' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      cx="50" cy="50" r="42" fill="none" stroke="#14B8A6" strokeWidth="8" strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">84%</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-ethos-slate">Income</div>
                  <div className="font-bold text-ethos-navy text-lg">Verified</div>
                </div>
                <div>
                  <div className="text-sm text-ethos-slate">Rent History</div>
                  <div className="font-bold text-ethos-navy text-lg">24 mo</div>
                </div>
                <div>
                  <div className="text-sm text-ethos-slate">Vouches</div>
                  <div className="font-bold text-ethos-navy text-lg">3</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-ethos-slate/10 shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-ethos-navy">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {recentActivity.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4 px-6 py-4 hover:bg-ethos-slate/5 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.status === 'success' ? 'bg-ethos-emerald/10 text-ethos-emerald' : 'bg-ethos-blue/10 text-ethos-blue'}`}>
                      {item.type === 'verification' ? <ShieldCheck className="w-5 h-5" /> : item.type === 'connection' ? <Link2 className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="font-medium text-ethos-navy text-sm">{item.title}</div>
                      <div className="text-xs text-ethos-slate truncate">{item.detail}</div>
                    </div>
                    <div className="text-xs text-ethos-slate shrink-0">{item.time}</div>
                  </div>
                  {i < recentActivity.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Side */}
        <div className="space-y-8">
          <Card className="border-ethos-slate/10 shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-lg text-ethos-navy">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { icon: <FileCheck className="w-4 h-4" />, label: 'Generate New Proof', color: 'text-ethos-teal' },
                { icon: <Globe2 className="w-4 h-4" />, label: 'Share Ethos Score', color: 'text-ethos-blue' },
                { icon: <CreditCard className="w-4 h-4" />, label: 'Fund with M-Pesa', color: 'text-ethos-emerald', onClick: async () => {
                    alert('Initiating STK Push...');
                    const res = await mpesaApi.initiateSTKPush({ phoneNumber: '254700000000', amount: 1000, accountReference: 'Wallet Deposit' });
                    alert(res.customerMessage);
                  }
                }
              ].map((action, i) => (
                <button key={i} onClick={action.onClick} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-ethos-slate/5 transition-colors text-left">
                  <div className={action.color}>{action.icon}</div>
                  <span className="text-sm font-medium text-ethos-navy">{action.label}</span>
                  <ChevronRight className="w-4 h-4 text-ethos-slate ml-auto" />
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
