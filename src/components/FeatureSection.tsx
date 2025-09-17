import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Clock, Shield, Zap } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Advanced AI analyzes your inputs to create compelling, personalized pitches that resonate with your audience."
    },
    {
      icon: Target,
      title: "Audience-Specific Targeting", 
      description: "Tailored messaging for executives, investors, recruiters, and customers with industry-specific language."
    },
    {
      icon: Users,
      title: "Industry Expertise",
      description: "Pre-trained on successful pitches across technology, healthcare, finance, and other major industries."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Generate professional pitches in seconds, not hours. Save time and focus on building relationships."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your sensitive business information is encrypted and never used to train our models."
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Our AI improves with every pitch, learning from successful patterns to deliver better results."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Pitchmate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by founders, for founders. We understand what makes a pitch successful 
            and have encoded that knowledge into our AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;