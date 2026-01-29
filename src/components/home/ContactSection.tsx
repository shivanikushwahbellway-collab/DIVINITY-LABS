import { Mail, MessageCircle, Send, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(42 65% 48% / 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gold/20 shadow-sm mb-6">
              <MessageCircle className="w-5 h-5 text-primary animate-glow" />
              <span className="text-sm text-foreground/70 font-medium tracking-wide">
                LET'S CONNECT
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Institutional{" "}
              <span className="text-gradient-gold">Enquiries</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              For any institutional or regulatory enquiries, please reach out to our team via email.
            </p>
          </div>

          {/* Contact Cards Grid */}
          {/* Contact Card */}
          <div className="max-w-xl mx-auto">
            {/* Email Card */}
            <div
              className="group relative p-10 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative mb-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Email Correspondence
                </h3>
                <p className="text-foreground/70 text-lg mb-6">
                  For institutional enquiries, please write to
                </p>
                <a
                  href="mailto:admin@divinitylabs.co.in"
                  className="text-2xl font-bold text-primary hover:text-gold-light transition-colors block break-all"
                >
                  admin@divinitylabs.co.in
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
