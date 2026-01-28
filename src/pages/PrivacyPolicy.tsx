import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Effective Date: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Privacy Statement */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Our Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Divinity Labs Private Limited respects user privacy and processes data only for
                  platform functionality, legal compliance, and service delivery.
                </p>
              </div>

              {/* No Selling Data */}


              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  We Do Not Sell Personal Data

                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We Do Not Sell Personal Data

                </p>
              </div>




              {/* Data Sharing */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Data Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Data may be shared only with authorised service providers such as payment gateways,
                  hosting providers, and communication platforms.
                </p>
              </div>

              {/* Updates */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Updates to Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The policy may be updated periodically in accordance with applicable laws and business
                  requirements.
                </p>
              </div>




              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Disclaimer

                </h2>
                <p className="text-gray-700 leading-relaxed">

                  Divinity Labs Private Limited is a technology company and does not represent any religious
                  authority.
                  All religious services are performed solely by the respective temples or institutions.
                </p>
              </div>


              {/* Contact */}
              <div className="pt-8 border-t border-gray-200">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicy;
