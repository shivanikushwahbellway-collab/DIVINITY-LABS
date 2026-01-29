import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Building } from "lucide-react";
import contactVisual from "@/assets/contact-visual.jpg";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header with Visual */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={contactVisual}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Institutional Enquiries
            </h1>
            <p className="text-cream-dark text-lg">
              For institutional, regulatory, or business enquiries, please reach out to us via email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {/* Company Name */}
              <div className="p-8 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Company Name
                    </p>
                    <p className="text-xl font-serif font-semibold text-foreground">
                      Divinity Labs Private Limited
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-8 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Email Address
                    </p>
                    <a
                      href="mailto:admin@divinitylabs.co.in"
                      className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                    >
                      admin@divinitylabs.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="p-8 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Registered Office Address
                    </p>
                    <address className="text-lg text-foreground not-italic leading-relaxed">
                      501, Siddheshwar Height,<br />
                      Moghul Lane, Mahim,<br />
                      Mumbai – 400016,<br />
                      Maharashtra, India
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm">
                For all business inquiries, please reach out via email. We typically respond within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
