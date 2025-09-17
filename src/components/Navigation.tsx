import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">P</span>
        </div>
        <span className="text-xl font-bold text-foreground">Pitchmate</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
          Pricing
        </a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
      </div>
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {localStorage.getItem('token') ? (
          <Button variant="ghost" onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</Button>
        ) : (
          <>
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero">Get Started</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;