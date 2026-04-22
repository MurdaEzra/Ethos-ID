import React, { useState } from 'react';
import { ShieldCheck, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { smileIdApi } from '../../services/api/smileId';

export function IdentityPage() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified'>('pending');

  const handleVerifyIdentity = async () => {
    setIsVerifying(true);
    try {
      const res = await smileIdApi.verifyIdentity({
        idNumber: 'DEFAULT_KYC',
        documentType: 'NATIONAL_ID'
      });
      if (res.success) {
        setKycStatus('verified');
      }
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold font-heading text-ethos-navy mb-2">Identity & KYC</h2>
        <p className="text-ethos-slate">Manage your digital identity verifications and zero-knowledge proofs.</p>
      </div>

      <Card className="border-ethos-slate/10 shadow-sm border-t-4 border-t-ethos-blue">
        <CardHeader>
          <CardTitle className="font-heading text-xl text-ethos-navy flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-ethos-blue" />
            National ID Verification
          </CardTitle>
          <CardDescription>Powered by authentic SmileID infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-ethos-slate/5 rounded-xl border border-ethos-slate/10">
            <div>
              <p className="font-medium text-ethos-navy mb-1">Verify your identity instantly</p>
              <p className="text-sm text-ethos-slate max-w-md">
                Complete a fast biometric check paired with your National ID integration to unlock your global passport.
              </p>
            </div>
            {kycStatus === 'verified' ? (
              <Button disabled className="bg-ethos-emerald text-white min-w-[140px] opacity-100 flex items-center justify-center">
                <ShieldCheck className="mr-2 w-4 h-4" /> Verified
              </Button>
            ) : (
              <Button
                onClick={handleVerifyIdentity}
                disabled={isVerifying}
                className="bg-ethos-blue hover:bg-ethos-blue-dark text-white min-w-[140px] shadow-sm flex items-center justify-center"
              >
                {isVerifying ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Start Verification'
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-ethos-slate/10 shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading text-xl text-ethos-navy flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-ethos-teal" />
            Zero-Knowledge Proofs (ZKPs)
          </CardTitle>
          <CardDescription>Generate and manage cryptographic proofs</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="text-sm text-ethos-slate">
             Proof generation becomes available after successful Identity Verification. ZKPs allow you to prove your age, nationality, or income without revealing the underlying delicate data.
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
