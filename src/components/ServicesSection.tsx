import { LayoutDashboard, Settings, Cpu, Layers } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Custom Web Dashboards",
    description: "Purpose-built dashboards tailored to your business logic — not generic templates.",
    features: [
      "Transaction tracking",
      "Commission calculation",
      "Sales rep performance",
      "Real-time reporting",
      "Role-based access",
    ],
  },
  {
    icon: Settings,
    title: "Internal Operations Tools",
    description: "Replace Excel, emails, and manual processes with streamlined internal systems.",
    features: [
      "CRM-style tools",
      "Sales rep assignment",
      "Customer management",
      "Workflow automation",
      "Admin control panels",
    ],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Apply rules once — let AI handle the rest automatically.",
    features: [
      "AI-powered calculations",
      "Rule-based commission engines",
      "Smart alerts & insights",
      "Workflow automation",
      "Predictive analytics",
    ],
  },
  {
    icon: Layers,
    title: "AI SaaS Development",
    description: "We turn complex financial logic into scalable SaaS products.",
    features: [
      "Multi-tenant SaaS platforms",
      "Secure authentication",
      "Subscription billing",
      "Analytics dashboards",
      "API integrations",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to transform your financial operations and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
