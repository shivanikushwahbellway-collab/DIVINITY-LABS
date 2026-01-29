import { ExternalLink, CheckCircle2, Star, TrendingUp, Smartphone, Store, Download } from "lucide-react";
import platformVisual from "@/assets/platform-visual.jpg";

const PlatformSection = () => {
  const platformFeatures = [
    "Digital booking systems for religious services",
    "Secure technology for donations and offerings",
    "Information management for institutions",
    "Sacred item distribution technology",
    "Access portals for authorised representatives"
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(42 65% 48% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-gold/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-gold/10 to-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating orbs */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
              <Star className="w-5 h-5 text-primary animate-glow" />
              <span className="text-sm text-foreground/80 font-bold tracking-widest uppercase">
                FLAGSHIP PLATFORM
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              DevBhakti™
            </h2>
            <p className="text-foreground/70 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              The technology platform developed by <span className="text-primary font-semibold">Divinity Labs Private Limited</span> to digitally connect temples and devotees
            </p>
          </div>

          {/* Enhanced Platform Card */}
          <div className="relative rounded-3xl bg-white/70 backdrop-blur-md border-2 border-gold/20 shadow-2xl overflow-hidden animate-fadeInUp hover:shadow-3xl transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-gold/10 pointer-events-none" />

            {/* Top accent bar with gradient animation */}
            <div className="h-2 bg-gradient-to-r from-primary via-gold-light to-primary" />

            <div className="relative p-10 md:p-14">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <div className="space-y-8">
                  {/* Enhanced Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 shadow-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-bold tracking-wide">TECHNOLOGY PLATFORM</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Connecting{" "}
                    <span className="text-gradient-gold">Temples</span>
                    <br />
                    with{" "}
                    <span className="text-gradient-gold">Devotees</span>
                  </h3>

                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                    DevBhakti™ is a comprehensive digital ecosystem enabling temples
                    to modernize their operations while devotees enjoy seamless spiritual
                    connections through secure, compliant technology infrastructure.
                  </p>

                  <p className="text-foreground/70 text-sm italic leading-relaxed pt-2 border-t border-gold/10">
                    "DevBhakti™ is a technology platform operated by Divinity Labs Private Limited.
                    All religious services, rituals, and offerings are performed solely by the respective
                    temples or authorised institutions."
                  </p>

                  {/* Platform Features */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground text-xl mb-5">Platform Capabilities</h4>
                    <ul className="space-y-4">
                      {platformFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground/80 text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* App Store Availability */}
                  <div className="pt-6 space-y-4">
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-lg">Available on Google Play & App Store</span>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="relative">
                  {/* Decorative background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-3xl -z-10" />

                  {/* Main image container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 group hover:border-primary/40 transition-all duration-500">
                    <img
                      src={platformVisual}
                      alt="DevBhakti.com Platform Interface"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Enhanced Floating platform badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-center gap-4 px-8 py-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-gold/20">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg">
                          <span className="font-serif text-2xl text-white font-bold">D</span>
                        </div>
                        <div>
                          <div className="font-serif text-2xl text-foreground font-bold">DevBhakti™</div>
                          <div className="text-sm text-foreground/60">Technology Platform</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Available Badge */}
                  <div className="absolute top-6 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-gold text-white text-xs font-bold shadow-xl">
                    MOBILE PLATFORM AVAILABLE
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
