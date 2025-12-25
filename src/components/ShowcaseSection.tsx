import { ArrowUpRight, TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Built for Real <span className="gradient-text">Financial Workflows</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A real-world dashboard we built to automate commissions, track transactions, and manage sales teams — eliminating Excel completely.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: BarChart3, label: "Transactions Overview" },
                { icon: DollarSign, label: "Commission Engine" },
                { icon: Users, label: "Sales Rep Assignment" },
                { icon: TrendingUp, label: "Analytics UI" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-card p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              View Case Study
              <ArrowUpRight className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="glass-card p-6 rounded-3xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Dashboard Overview</h3>
                  <p className="text-sm text-muted-foreground">Monthly Performance</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Revenue", value: "$847,293", change: "+12.5%" },
                  { label: "Commissions", value: "$124,580", change: "+8.2%" },
                  { label: "Active Reps", value: "247", change: "+15" },
                ].map((stat, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className="font-heading font-bold text-lg text-foreground">{stat.value}</p>
                    <span className="text-xs text-accent">{stat.change}</span>
                  </div>
                ))}
              </div>
              
              {/* Chart Placeholder */}
              <div className="bg-muted/30 rounded-xl p-4 mb-6">
                <div className="flex items-end justify-between h-32 gap-2">
                  {[35, 55, 40, 70, 85, 65, 75, 90, 60, 80, 70, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Recent Transactions */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground mb-3">Recent Transactions</p>
                {[
                  { name: "Card Terminal Sale", amount: "+$2,450", time: "2 min ago" },
                  { name: "Commission Payout", amount: "-$580", time: "15 min ago" },
                  { name: "ISP Subscription", amount: "+$1,200", time: "1 hour ago" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{tx.name}</p>
                      <p className="text-xs text-muted-foreground">{tx.time}</p>
                    </div>
                    <span className={`text-sm font-medium ${tx.amount.startsWith('+') ? 'text-accent' : 'text-muted-foreground'}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
