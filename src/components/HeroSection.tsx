import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating glass cards */}
        <div className="hidden lg:block absolute top-32 right-20 w-64 h-40 glass-card rounded-2xl animate-float p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Revenue Tracking</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full w-full" />
            <div className="h-2 bg-primary/30 rounded-full w-3/4" />
            <div className="h-2 bg-muted rounded-full w-1/2" />
          </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-40 left-20 w-56 h-36 glass-card rounded-2xl animate-float-delayed p-4">
          <div className="text-xs text-muted-foreground mb-2">Commission Payout</div>
          <div className="text-2xl font-heading font-bold text-foreground mb-1">$124,580</div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-sm">+12.5%</span>
            <span className="text-muted-foreground text-xs">this month</span>
          </div>
        </div>
        
        <div className="hidden lg:block absolute top-1/2 right-40 w-48 h-32 glass-card rounded-2xl animate-float-slow p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-muted-foreground">Active Reps</span>
            <span className="text-primary text-lg font-bold">247</span>
          </div>
          <div className="flex gap-1">
            {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Trusted by leading financial institutions</span>
            </div>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up-delayed text-balance">
            Stop Managing Finance in Excel.
            <span className="gradient-text"> Start Scaling with Systems.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up-delayed-2 text-balance">
            We replace manual reporting with automated dashboards that save hours, reduce errors, and unlock real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delayed-2">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://calendly.com/farooqifaraz7/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="mr-2 w-4 h-4" />
              View Our Solutions
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-10 border-t border-border/50">
            {[
              { value: "10+", label: "Active Clients" },
              { value: "10M+", label: "Transactions Processed" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
