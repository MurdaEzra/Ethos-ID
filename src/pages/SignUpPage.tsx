import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription } from
'../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
export function SignUpPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  usePageTitle('Sign Up | EthosID');
  const inputClass =
  'flex h-10 w-full rounded-md border border-ethos-slate/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ethos-blue focus:border-transparent transition-colors';
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-ethos-slate/5">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.3
        }}
        className="w-full max-w-lg px-4">
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div
            className={`w-3 h-3 rounded-full transition-colors ${step >= 1 ? 'bg-ethos-blue' : 'bg-ethos-slate/20'}`} />
          
          <div
            className={`w-8 h-0.5 transition-colors ${step >= 2 ? 'bg-ethos-blue' : 'bg-ethos-slate/20'}`} />
          
          <div
            className={`w-3 h-3 rounded-full transition-colors ${step >= 2 ? 'bg-ethos-blue' : 'bg-ethos-slate/20'}`} />
          
        </div>
        <p className="text-center text-sm text-ethos-slate mb-4">
          Step {step} of 2
        </p>

        <Card className="border-ethos-slate/10 shadow-xl bg-white">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-heading text-2xl font-bold text-ethos-navy">
              {step === 1 ? 'Create an account' : 'Your location'}
            </CardTitle>
            <CardDescription>
              {step === 1 ?
              'Start building your global financial reputation' :
              'We need your address to connect local financial services'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {step === 1 ?
              <>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="name">
                    
                      Full Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={inputClass}
                    required />
                  
                  </div>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="email">
                    
                      Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className={inputClass}
                    required />
                  
                  </div>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="password">
                    
                      Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    placeholder="Min. 8 characters"
                    className={inputClass}
                    required />
                  
                    <p className="text-xs text-ethos-slate mt-1">
                      Must be at least 8 characters long.
                    </p>
                  </div>
                  <Button
                  className="w-full bg-ethos-coral hover:bg-ethos-coral/90 text-white mt-4"
                  type="submit">
                  
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </> :

              <>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="country">
                    
                      Country / Region
                    </label>
                    <select
                    id="country"
                    className={inputClass}
                    required
                    defaultValue="">
                    
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="KE">Kenya</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="NG">Nigeria</option>
                      <option value="JP">Japan</option>
                      <option value="AU">Australia</option>
                      <option value="CA">Canada</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="city">
                    
                      City
                    </label>
                    <input
                    id="city"
                    type="text"
                    placeholder="London"
                    className={inputClass}
                    required />
                  
                  </div>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="address">
                    
                      Postal Address
                    </label>
                    <input
                    id="address"
                    type="text"
                    placeholder="123 Main Street, Apt 4B"
                    className={inputClass}
                    required />
                  
                  </div>
                  <div className="space-y-2">
                    <label
                    className="text-sm font-medium text-ethos-navy"
                    htmlFor="postal">
                    
                      Postal Code
                    </label>
                    <input
                    id="postal"
                    type="text"
                    placeholder="SW1A 1AA"
                    className={inputClass}
                    required />
                  
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-ethos-slate/20"
                    onClick={() => setStep(1)}>
                    
                      <ArrowLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button
                    className="flex-1 bg-ethos-coral hover:bg-ethos-coral/90 text-white"
                    type="submit">
                    
                      Create Account
                    </Button>
                  </div>
                </>
              }
            </form>

            <div className="mt-6 text-center text-sm text-ethos-slate">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-ethos-blue font-medium hover:underline">
                
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

}