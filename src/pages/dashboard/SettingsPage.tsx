import React from 'react';
import { Settings, Shield, Bell, UserX } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

export function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold font-heading text-ethos-navy mb-2">Settings</h2>
        <p className="text-ethos-slate">Manage your profile, preferences, and security configurations.</p>
      </div>

      <div className="grid gap-6">
        <Card className="border-ethos-slate/10 shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-ethos-navy flex items-center gap-2">
              <Shield className="w-5 h-5 text-ethos-blue" />
              Security
            </CardTitle>
            <CardDescription>Update your verification policies and access tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-ethos-navy">Two-Factor Authentication (2FA)</p>
                <p className="text-sm text-ethos-slate">Secure your account with an extra verification step.</p>
              </div>
              <Button variant="outline" className="border-ethos-blue text-ethos-blue hover:bg-ethos-blue/5">Enable</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-ethos-navy">Password Reset</p>
                <p className="text-sm text-ethos-slate">Update your login credentials credentials regularly.</p>
              </div>
              <Button variant="outline" className="text-ethos-navy">Update</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-ethos-slate/10 shadow-sm border-t-4 border-t-rose-500">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-rose-600 flex items-center gap-2">
              <UserX className="w-5 h-5" />
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-ethos-slate mb-4">
               Once you delete your EthosID, there is no going back. This destroys your verifiable credentials entirely across the chain.
             </p>
             <Button className="bg-rose-500 hover:bg-rose-600 text-white">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
