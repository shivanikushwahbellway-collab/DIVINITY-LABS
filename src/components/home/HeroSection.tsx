import heroImage from "@/assets/hero-abstract.jpg";
import { Sparkles, Globe, Shield, Zap, ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-navy-deep">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-base/95 to-navy-deep" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(42 65% 48% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(42 65% 48% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated Particles/Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 bg-navy-base/60 backdrop-blur-md mb-10 animate-slideUp">
            <Sparkles className="w-5 h-5 text-white animate-glow" />
            <span className="text-sm text-cream-muted font-medium tracking-wide">
              Divinity Labs Private Limited
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-8 animate-slideUp stagger-1">
            Building Digital Infrastructure for{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold text-5xl md:text-6xl lg:text-8xl">India's Spiritual</span>
              {/* Underline decoration */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
            <br />
            <span className="text-gradient-gold text-4xl md:text-5xl lg:text-7xl">& Faith Ecosystem</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-cream-muted max-w-3xl mx-auto leading-relaxed mb-12 animate-slideUp stagger-2">
            Divinity Labs Private Limited is an India-incorporated technology company building scalable
            and compliant digital platforms for temples, religious institutions, and devotees.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slideUp stagger-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-gold-light text-white font-semibold text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slideUp stagger-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-navy-base/50 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-medium">AI-Powered</p>
                <p className="text-xs text-cream-muted">Solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-navy-base/50 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-medium">Secure &</p>
                <p className="text-xs text-cream-muted">Compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-navy-base/50 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white font-medium">Fast &</p>
                <p className="text-xs text-cream-muted">Scalable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-cream-muted/50 tracking-widest">SCROLL</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div> */}
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default HeroSection;
