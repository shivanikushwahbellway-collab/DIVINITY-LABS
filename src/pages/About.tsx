import Layout from "@/components/layout/Layout";
import { Building, FileText, Shield, Award } from "lucide-react";
import aboutHeroImage from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <Layout>
      {/* Page Header with Hero Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Company Information & Legal
            </h1>
            <p className="text-gray-700 text-lg">
              Learn about Divinity Labs Private Limited, our mission, and statutory information.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-gold/20 mb-6">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-bold uppercase tracking-wide">
                  COMPANY OVERVIEW
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient-gold">Divinity Labs</span>
              </h2>
            </div>

            {/* Overview Content */}
            <div className="space-y-8">
              {/* Main Card */}
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-secondary/30 to-white border-2 border-gold/20 shadow-xl">
                <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                  <p className="text-xl font-semibold text-foreground">
                    Divinity Labs Private Limited is an Indian technology company incorporated under the Companies Act, 2013.
                  </p>

                  <p>
                    The company builds digital platforms and infrastructure for temples, religious institutions, and devotees, bridging the gap between tradition and modern technology.
                  </p>

                  <div className="pt-6 mt-6 border-t border-gold/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Important Note:</p>
                        <p className="text-foreground/70">
                          The company does not perform religious rituals or represent religious authorities. We are strictly a technology service provider.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Points Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    Indian Company
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Incorporated under Companies Act, 2013
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    Technology Focus
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Digital platforms for religious institutions
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    DPIIT Certified
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Recognized startup - DIPP240219
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-bold uppercase tracking-wide">
                  CORE PRODUCT
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dev<span className="text-gradient-gold">Bhakti</span>.in
              </h2>
              <p className="text-foreground/70 text-xl max-w-3xl mx-auto">
                A technology platform developed by Divinity Labs Private Limited to digitally connect temples and devotees
              </p>
            </div>

            {/* Platform Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border-2 border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Platform Capabilities
                </h3>
                <ul className="space-y-4">
                  {[
                    "Online pooja, seva, and darshan bookings (as offered by temples)",
                    "Digital donation and offering collection on behalf of temples",
                    "Devotee communication and data management",
                    "Prasad and sacred item fulfilment workflows",
                    "Administrative dashboards for authorised temple representatives"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-gold-light text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Technology Focus
                </h3>
                <div className="space-y-6">
                  <p className="text-white/90 leading-relaxed">
                    DevBhakti.in is designed to empower religious institutions with modern digital infrastructure while preserving the sanctity and authenticity of spiritual practices.
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80 mb-3">Platform Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Secure", "Compliant", "Scalable", "User-Friendly"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Statutory Details */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-gray-900">
                Statutory Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Legal Name */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  Legal Name
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Divinity Labs Private Limited
                </p>
              </div>

              {/* CIN */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  Corporate Identity Number (CIN)
                </p>
                <p className="text-lg font-medium text-gray-900 font-mono">
                  U63112MH2025PTC462628
                </p>
              </div>

              {/* DPIIT */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    DPIIT Certificate Number
                  </p>
                </div>
                <p className="text-lg font-medium text-gray-900 font-mono">
                  DIPP240219
                </p>
              </div>

              {/* Registered Office */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  Registered Office Address
                </p>
                <p className="text-gray-900 leading-relaxed">
                  501, Siddheshwar Height, Moghul Lane,<br />
                  Mahim, Mumbai – 400016,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-xl border-2 border-border bg-card">
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4 text-center">
                Important Disclaimer
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Divinity Labs Private Limited is a technology company and does not represent
                any religious authority. We provide digital infrastructure and technology
                services only. All religious services, ceremonies, and activities conducted
                through our platforms are the sole responsibility of the respective temples,
                trusts, and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
