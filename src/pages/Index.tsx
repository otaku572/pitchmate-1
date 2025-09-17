import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PitchGenerator from "@/components/PitchGenerator";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import Dashboard from "@/components/Dashboard";
import { useState, useEffect } from "react";
import { isAuthenticated } from "@/utils/auth";

const Index = () => {
  
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {isUserAuthenticated ? (
        <>
          <Dashboard />
          <PitchGenerator />
        </>
      ) : (
        <>
                          <>
                  <HeroSection />
                  <FeatureSection />
                  <PricingSection />
                  <AboutSection />
                </>
        </>
      )}
    </div>
  );
};

export default Index;
