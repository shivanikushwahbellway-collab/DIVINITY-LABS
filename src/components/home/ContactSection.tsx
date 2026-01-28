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
              Ready to Transform Your{" "}
              <span className="text-gradient-gold">Institution?</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can help digitize your temple or religious organization.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {/* Email Card */}
            <div
              className="group relative p-8 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Email Us
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                For business inquiries and partnerships
              </p>
              <a
                href="mailto:contact@divinitylabs.in"
                className="text-lg font-semibold text-primary group-hover:text-gold-light transition-colors"
              >
                contact@divinitylabs.in
              </a>
            </div>

            {/* Contact Page Card */}
            <Link
              to="/contact"
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary to-gold-light border border-transparent shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Send className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Contact Form
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Fill out our contact form and we'll get back to you
              </p>
              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                <span>Go to Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-navy-base text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-navy-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <span>Start Your Digital Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
