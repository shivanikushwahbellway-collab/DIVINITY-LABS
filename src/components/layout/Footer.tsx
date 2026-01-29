import { Link } from "react-router-dom";
import logo from "@/assets/divinity-labs-logo.png";
import { ArrowRight, Mail, MapPin, Phone, Clock, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold-light to-primary" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Divinity Labs Private Limited"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-cream-muted text-base leading-relaxed mb-6 max-w-md">
              Building trusted digital infrastructure for India's spiritual and faith ecosystem.
              Empowering temples and religious institutions with modern technology solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cream-muted">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span>501, Siddheshwar Height, Moghul Lane,
                  Mahim, Mumbai – 400016, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-cream-muted">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:contact@divinitylabs.in" className="hover:text-white transition-colors">
                  admin@divinitylabs.co.in
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-cream-muted">
                <Clock className="w-5 h-5 text-white flex-shrink-0" />
                <span>Mon - Sat: 9AM - 6PM IST</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-cream-muted hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-of-use", label: "Terms of Use" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-cream-muted hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info Cards */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">
              Company
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-white" />
                  <p className="text-xs text-cream-muted uppercase tracking-wide">Legal Status</p>
                </div>
                <p className="text-white font-semibold">
                  Private Limited Company
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-white" />
                  <p className="text-xs text-cream-muted uppercase tracking-wide">CIN</p>
                </div>
                <p className="text-white font-semibold text-sm">
                  U63112MH2025PTC462628
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-white" />
                  <p className="text-xs text-cream-muted uppercase tracking-wide">DPIIT Certificate Number</p>
                </div>
                <p className="text-white font-semibold">
                  DIPP240219
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-cream-muted">
                © {currentYear} Divinity Labs Private Limited. All rights reserved.
              </p>
              <p className="text-cream-muted/60 text-sm mt-1">
                Divinity Labs Private Limited is a company incorporated under the Companies
                Act, 2013. DevBhakti™ is a trademark of Divinity Labs Private Limited.
              </p>
            </div>

            {/* Social/Trust Badges */}
            <div className="flex items-center gap-6">
              {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-cream-muted">Secure & Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-cream-muted">Made in India</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
