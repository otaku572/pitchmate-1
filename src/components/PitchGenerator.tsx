import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Save } from "lucide-react";

const PitchGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState("");
  
  const [formData, setFormData] = useState({
    industry: "",
    audienceType: "",
    recipientInfo: "",
    companyName: "",
    pitchGoal: ""
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedPitch(`Hi [Recipient Name],

I hope this message finds you well. I'm reaching out because I noticed your experience in ${formData.industry} and thought you might be interested in what we're building at ${formData.companyName || '[Your Company]'}.

We've developed a solution that specifically addresses the challenges that ${formData.audienceType}s face in today's market. Based on your background in ${formData.recipientInfo}, I believe this could be particularly relevant to your current initiatives.

Our approach has helped similar ${formData.industry} companies achieve:
• 40% increase in operational efficiency
• 25% reduction in costs
• Streamlined processes that save 10+ hours per week

I'd love to show you how this could work for your organization. Would you be open to a brief 15-minute conversation this week?

Best regards,
[Your Name]

P.S. I can share a quick case study from a similar ${formData.industry} company that might interest you.`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPitch);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Generate Your Perfect Pitch
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill in the details below and let AI craft a personalized pitch for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Pitch Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">Your Company Name</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Audience Type</Label>
                <Select value={formData.audienceType} onValueChange={(value) => setFormData({ ...formData, audienceType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Who are you pitching to?" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
                    <SelectItem value="executive">C-Level Executive</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="recruiter">Recruiter</SelectItem>
                    <SelectItem value="customer">Potential Customer</SelectItem>
                    <SelectItem value="partner">Business Partner</SelectItem>
                    <SelectItem value="vendor">Vendor/Supplier</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Pitch Goal</Label>
                <Select value={formData.pitchGoal} onValueChange={(value) => setFormData({ ...formData, pitchGoal: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your goal?" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
                    <SelectItem value="meeting">Schedule a Meeting</SelectItem>
                    <SelectItem value="demo">Request a Demo</SelectItem>
                    <SelectItem value="investment">Seek Investment</SelectItem>
                    <SelectItem value="partnership">Propose Partnership</SelectItem>
                    <SelectItem value="sale">Make a Sale</SelectItem>
                    <SelectItem value="job">Apply for Job</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient Information</Label>
                <Textarea
                  id="recipient"
                  placeholder="Tell us about the person/company you're pitching to (their background, company, recent news, etc.)"
                  value={formData.recipientInfo}
                  onChange={(e) => setFormData({ ...formData, recipientInfo: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                onClick={handleGenerate} 
                className="w-full" 
                variant="hero" 
                size="lg"
                disabled={!formData.industry || !formData.audienceType || !formData.recipientInfo || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Generating Your Pitch...
                  </>
                ) : (
                  "Generate Pitch"
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Pitch */}
          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Generated Pitch</CardTitle>
              {generatedPitch && (
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {generatedPitch ? (
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">
                    {generatedPitch}
                  </pre>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p>Your generated pitch will appear here</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PitchGenerator;