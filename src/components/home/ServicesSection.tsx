import { Building2, CreditCard, ShoppingBag, Settings, ArrowUpRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Building2,
    title: "Temple & Trust Digitisation",
    description: "Digital transformation solutions designed for religious institutions and trusts, enabling digital presence while honoring sacred traditions.",
    features: [
      "Digital presence for religious institutions",
      "Technology enablement for rituals and offerings",
      "Devotee engagement frameworks"
    ]
  },
  {
    icon: CreditCard,
    title: "Payments & Compliance Infrastructure",
    description: "Technology infrastructure for secure and compliant financial transactions for religious institutions.",
    features: [
      "Payment infrastructure integration",
      "Digital transaction records",
      "Compliance reporting systems"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Sacred Commerce Enablement",
    description: "Technology solutions for prasad and sacred item distribution with international readiness.",
    features: [
      "Fulfilment coordination technology",
      "Supply chain enablement",
      "Global distribution infrastructure"
    ]
  },
  {
    icon: Settings,
    title: "Governance & Operations Tools",
    description: "Professional management systems providing oversight and scalability for multi-temple operations.",
    features: [
      "Institutional management tools",
      "Data-driven insights",
      "Scalable infrastructure for organisations"
    ]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-br from-secondary/20 via-white to-gold/5">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(42 65% 48% / 0.12) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-gold/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-gold/10 to-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating orbs for depth */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-primary animate-glow" />
            <span className="text-sm text-foreground/80 font-bold tracking-widest uppercase">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Comprehensive{" "}
            <span className="text-gradient-gold inline-block hover:scale-105 transition-transform">Technology</span>
            <br />
            <span className="text-foreground">Services</span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Building world-class digital infrastructure for India's spiritual ecosystem with
            <span className="text-primary font-semibold"> cutting-edge innovation</span>
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-md border-2 border-gold/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:border-primary/40 animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Gradient accent top */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-gold-light to-primary rounded-t-3xl" />

                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-gold/0 to-primary/0 group-hover:from-primary/5 group-hover:via-gold/5 group-hover:to-primary/5 transition-all duration-700 rounded-3xl" />

                {/* Decorative corner accent */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with enhanced styling */}
                <div className="relative mb-8 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-gold/20 flex items-center justify-center group-hover:from-primary group-hover:to-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl">
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  {/* Decorative rings */}
                  <div className="absolute -inset-3 rounded-2xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                  <div className="absolute -inset-5 rounded-2xl border border-gold/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" style={{ transitionDelay: '100ms' }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Enhanced Features list */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base text-foreground/70 group/item hover:text-foreground transition-colors"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-gold mt-2 group-hover/item:scale-150 transition-transform" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced Learn more link */}
                  <div className="flex items-center gap-3 text-primary font-bold text-base group-hover:gap-4 transition-all cursor-pointer">
                    <span className="relative">
                      Learn more
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;
