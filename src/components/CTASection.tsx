import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-12 md:p-16 text-center max-w-4xl mx-auto overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Replace Excel with{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Intelligent Systems?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's build a financial platform tailored to your business. Schedule a consultation to discover how we can transform your operations.
            </p>
            
            <a 
              href="https://calendly.com/farooqifaraz7/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 text-foreground font-medium px-8 py-4 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-muted-foreground mt-8">
              No commitment required • Free consultation • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
