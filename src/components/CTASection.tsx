import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto gradient-border">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Replace Excel with{" "}
            <span className="gradient-text">Intelligent Systems?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's build a financial platform tailored to your business. Schedule a consultation to discover how we can transform your operations.
          </p>
          
          <a 
            href="https://calendly.com/farooqifaraz7/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] h-14 px-10 text-lg group"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book a Call
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <p className="text-sm text-muted-foreground mt-8">
            No commitment required • Free consultation • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
