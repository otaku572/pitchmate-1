
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We're currently in our initial launch phase. For a limited time, all features are available for free.
        </p>
        <div className="mt-10 flex justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>Get started and see the results for yourself.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-5xl font-bold mb-4">
                $0
                <span className="text-lg font-normal text-muted-foreground">/ month</span>
              </p>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  10 Pitches Per Account
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Access to All Audiences
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Access to All Industries
                </li>
              </ul>
              <Link to="/register" className="w-full">
                <Button variant="hero" className="w-full">
                  Get Started For Free
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
