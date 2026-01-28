import { ExternalLink, CheckCircle2, Star, TrendingUp, Smartphone, Store, Download } from "lucide-react";
import platformVisual from "@/assets/platform-visual.jpg";

const PlatformSection = () => {
  const platformFeatures = [
    "Online pooja, seva, and darshan bookings",
    "Digital donations and offerings",
    "Devotee and donor data management",
    "Prasad and sacred item fulfilment workflows",
    "Administrative dashboards for authorised temple representatives"
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
              Dev<span className="text-gradient-gold inline-block hover:scale-105 transition-transform">Bhakti</span>.in
            </h2>
            <p className="text-foreground/70 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              The flagship platform developed by <span className="text-primary font-semibold">Divinity Labs Private Limited</span> to digitally connect temples and devotees
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
                    <span className="text-sm text-primary font-bold tracking-wide">FLAGSHIP PRODUCT</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Connecting{" "}
                    <span className="text-gradient-gold">Temples</span>
                    <br />
                    with{" "}
                    <span className="text-gradient-gold">Devotees</span>
                  </h3>

                  <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
                    DevBhakti.in is a comprehensive digital ecosystem enabling temples
                    to modernize their operations while devotees enjoy seamless spiritual
                    connections through secure, compliant technology infrastructure.
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
                  <div className="pt-6 space-y-5">
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Available on:</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {/* Apple App Store Badge */}
                      <div className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <Store className="w-6 h-6" />
                        <div className="text-left">
                          <div className="text-xs opacity-80">Download on the</div>
                          <div className="text-sm font-bold">Apple App Store</div>
                        </div>
                      </div>

                      {/* Google Play Store Badge */}
                      <div className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <Download className="w-6 h-6" />
                        <div className="text-left">
                          <div className="text-xs opacity-90">GET IT ON</div>
                          <div className="text-sm font-bold">Google Play</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <a
                      href="http://147.93.27.62:5101/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-gold-light text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                    >
                      <span>Visit DevBhakti.in</span>
                      <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                    </a>
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
                      alt="DevBhakti.in Platform Interface"
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
                          <div className="font-serif text-2xl text-foreground font-bold">DevBhakti.in</div>
                          <div className="text-sm text-foreground/60">Digital Temple Platform</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stats card - Temples */}
                  <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-2xl border-2 border-gold/20 animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">500+</div>
                        <div className="text-sm text-foreground/60 font-medium">Temples Connected</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating rating badge */}
                  <div className="absolute -top-4 -right-4 px-5 py-3 rounded-full bg-white shadow-2xl border-2 border-gold/30 flex items-center gap-2 animate-glowPulse">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-base font-bold text-foreground">4.9/5</span>
                  </div>

                  {/* App Available Badge */}
                  <div className="absolute top-6 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-gold text-white text-xs font-bold shadow-xl animate-pulse">
                    MOBILE APP AVAILABLE
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
