import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesSection } from '../components/FeaturesSection';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
export function HomePage() {
  usePageTitle('EthosID | Your Financial Reputation, Everywhere You Go');
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <HowItWorks />

      {/* Features Preview */}
      <div className="relative">
        <FeaturesSection limit={3} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ethos-slate/5 to-transparent flex items-end justify-center pb-8">
          <Link to="/features">
            <Button
              variant="outline"
              className="bg-white border-ethos-slate/20 text-ethos-navy hover:bg-ethos-slate/5 font-semibold">
              
              See All Features <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      <Testimonials />
      <CTASection />
    </div>);

}