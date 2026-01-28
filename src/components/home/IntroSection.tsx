import { Shield, Award, CheckCircle, Lock } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(42 65% 48% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border shadow-sm mb-10 animate-fadeInUp">
            <Award className="w-5 h-5 text-primary animate-glow" />
            <span className="text-sm text-foreground/70 font-medium tracking-wide">
              TRUSTED BY RELIGIOUS INSTITUTIONS
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Building the Future of{" "}
            <span className="text-gradient-gold">Digital Faith</span>
            <br />
            <span className="text-foreground">Infrastructure</span>
          </h2>
          
          {/* Subtext */}
          <div className="space-y-6 text-foreground/70 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl">
              Divinity Labs Private Limited is a technology company dedicated to 
              creating robust digital infrastructure that empowers temples, trusts, 
              and spiritual institutions across India.
            </p>
            <p className="text-lg md:text-xl">
              Our mission is to bridge the gap between traditional practices and 
              modern technology, enabling seamless digital experiences for devotees 
              while ensuring full regulatory compliance for institutions.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Shield, value: "100%", label: "Indian Ownership", desc: "Fully Indian company" },
              { icon: Award, value: "DPIIT", label: "Certified", desc: "Startup India" },
              { icon: CheckCircle, value: "100%", label: "Compliant", desc: "Digital Platforms" },
              { icon: Lock, value: "Secure", label: "Enterprise", desc: "Infrastructure" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                {/* Value */}
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
