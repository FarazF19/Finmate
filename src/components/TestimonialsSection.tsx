import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finmate replaced our Excel-based commission tracking with a real-time dashboard. Everything is faster, clearer, and error-free.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "PayTech Solutions",
    avatar: "SM",
  },
  {
    quote: "Our internal operations improved instantly after switching to Finmate's custom tools. The team saves 20+ hours weekly.",
    author: "James Rodriguez",
    role: "CEO",
    company: "ConnectISP",
    avatar: "JR",
  },
  {
    quote: "The AI-powered commission engine has eliminated calculation errors completely. Our sales reps trust the system now.",
    author: "Emily Chen",
    role: "Finance Manager",
    company: "CardFlow Inc",
    avatar: "EC",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how financial organizations are transforming their operations with Finmate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
