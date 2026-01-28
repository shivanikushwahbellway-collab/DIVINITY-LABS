import Layout from "@/components/layout/Layout";

const TermsOfUse = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">

              {/* Platform Provider & Services */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Platform Provider
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Divinity Labs Private Limited operates as a technology platform provider.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Independent Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All religious services listed on the platform are provided by independent temples or
                    institutions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Outcomes
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Divinity Labs Private Limited does not guarantee the outcome of any religious activity.
                  </p>
                </div>
              </div>

              {/* Modification of Terms (Mandatory Clause) */}

              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Modification of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Divinity Labs Private Limited reserves the right to modify, amend, or update these Terms of
                  Use at any time, at its sole discretion. Any changes will be effective immediately upon being
                  posted on the website. Continued use of the website or platform after such changes
                  constitutes acceptance of the revised terms.
                </p>
              </div>

              {/* Contact */}
              <div className="pt-8 border-t border-gray-200">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about these Terms of Use, please contact us at:{" "}
                  <a
                    href="mailto:admin@divinitylabs.co.in"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    admin@divinitylabs.co.in
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfUse;
