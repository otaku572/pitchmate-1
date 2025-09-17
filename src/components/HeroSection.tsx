import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pitchmate.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Generate Perfect 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Pitches</span> 
                Every Time
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered pitch generation for founders and professionals. Create personalized, 
                compelling messages that convert prospects into opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-4">
                Start Creating Pitches
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-4">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Pitchmate AI pitch generation interface" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
