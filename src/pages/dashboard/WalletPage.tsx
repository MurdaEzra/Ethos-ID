import React, { useState } from 'react';
import { CreditCard, Wallet, Link2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { mpesaApi } from '../../services/api/mpesa';

export function WalletPage() {
  const [connectingBank, setConnectingBank] = useState<string | null>(null);
  const [connectedBanks, setConnectedBanks] = useState<string[]>(['HSBC UK']);
  const [fundingMpesa, setFundingMpesa] = useState(false);

  const availableBanks = [
    { name: 'Bank of America', flag: '🇺🇸', region: 'US' },
    { name: 'Deutsche Bank', flag: '🇩🇪', region: 'DE' },
  ];

  const handleConnectBank = (bankName: string) => {
    setConnectingBank(bankName);
    setTimeout(() => {
      setConnectedBanks((prev) => [...prev, bankName]);
      setConnectingBank(null);
    }, 2000);
  };

  const handleMpesaFunding = async () => {
    setFundingMpesa(true);
    try {
      const res = await mpesaApi.initiateSTKPush({
        phoneNumber: '254700000000',
        amount: 5000,
        accountReference: 'Wallet Deposit'
      });
      alert(`M-Pesa STK Push Sent! Message: ${res.customerMessage}`);
    } finally {
      setFundingMpesa(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold font-heading text-ethos-navy mb-2">Wallet & Funding</h2>
        <p className="text-ethos-slate">Manage connected accounts and direct deposits securely.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-ethos-slate/10 shadow-sm border-t-4 border-t-ethos-emerald">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-ethos-navy flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-ethos-emerald" />
              M-Pesa Funding
            </CardTitle>
            <CardDescription>Instant deposits from Safaricom M-Pesa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-ethos-emerald/5 border border-ethos-emerald/20 rounded-xl">
              <p className="text-sm font-medium text-ethos-navy mb-1">Current Balance API linked</p>
              <h3 className="text-2xl font-bold font-heading text-ethos-emerald">KES 0.00</h3>
            </div>
            
            <Button
              onClick={handleMpesaFunding}
              disabled={fundingMpesa}
              className="w-full bg-ethos-emerald hover:bg-ethos-emerald/90 text-white shadow-sm flex items-center justify-center"
            >
              {fundingMpesa ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                'Fund Wallet (KES 5,000)'
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="border-ethos-slate/10 shadow-sm border-t-4 border-t-ethos-blue">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-heading text-xl text-ethos-navy flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-ethos-blue" />
                  Bank Connections
                </CardTitle>
                <CardDescription>Link your regional bank accounts</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-ethos-navy">Connected Accounts</h4>
               {connectedBanks.map((account, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-ethos-slate/5 border border-ethos-slate/10 rounded-lg">
                    <div className="flex-grow">
                      <div className="font-medium text-sm text-ethos-navy">{account}</div>
                      <div className="text-xs text-ethos-emerald flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-ethos-emerald rounded-full" /> Active
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-ethos-navy">Available to Connect</h4>
              {availableBanks.filter(b => !connectedBanks.includes(b.name)).map((bank) => (
                <button
                  key={bank.name}
                  onClick={() => handleConnectBank(bank.name)}
                  disabled={connectingBank !== null}
                  className="w-full flex items-center justify-between p-3 border border-ethos-slate/10 hover:border-ethos-blue/30 hover:bg-ethos-blue/5 rounded-lg transition-all text-left group disabled:opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{bank.flag}</span>
                    <span className="font-medium text-sm text-ethos-navy">{bank.name}</span>
                  </div>
                  {connectingBank === bank.name ? (
                     <div className="w-4 h-4 border-2 border-ethos-blue border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Link2 className="w-4 h-4 text-ethos-slate group-hover:text-ethos-blue" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
