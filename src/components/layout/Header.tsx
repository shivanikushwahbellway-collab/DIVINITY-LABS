import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/divinity-labs-logo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#services", label: "Services" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-use", label: "Terms" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to section on hash change
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white shadow-lg py-4"
        : "bg-navy-deep py-4"
        }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo Only */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Divinity Labs Private Limited"
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${location.pathname === link.href
                    ? scrolled
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white/20 text-white border border-white/30"
                    : scrolled
                      ? "text-foreground hover:text-primary hover:bg-secondary"
                      : "text-white hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-wide shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${scrolled
              ? "bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
              : "bg-white text-navy-deep hover:bg-cream-muted hover:shadow-xl"
              }`}
          >
            For institutional enquiries
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-3 rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-xl border border-border p-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${location.pathname === link.href
                      ? "bg-primary text-white"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-3 rounded-lg bg-primary text-white font-bold text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
