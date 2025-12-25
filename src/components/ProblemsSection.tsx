import { X, Check } from "lucide-react";

const problems = [
  "Manual Excel formulas",
  "Commission calculation errors",
  "No visibility into rep performance",
  "Scattered transaction data",
  "Time wasted on reporting",
];

const solutions = [
  "Automated calculations",
  "Real-time dashboards",
  "Clean analytics",
  "Scalable systems",
  "Zero spreadsheets",
];

const ProblemsSection = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the challenges financial organizations face. Here's how we transform chaos into clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Problems Column */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="glass-card p-8 gradient-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">The Finmate Way</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
