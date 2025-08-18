import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
              <p className="text-sm leading-relaxed">
                By accessing and using Electrify's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Use License</h2>
              <p className="text-sm leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Electrify's 
                website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h2>
              <p className="text-sm leading-relaxed">
                We strive to provide accurate product information, but we do not warrant that product 
                descriptions, prices, or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Pricing and Payment</h2>
              <p className="text-sm leading-relaxed">
                All prices are subject to change without notice. Payment must be made at the time of 
                order placement. We accept major credit cards and other payment methods as indicated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Shipping and Returns</h2>
              <p className="text-sm leading-relaxed">
                Orders are typically shipped within 1-2 business days. Returns are accepted within 30 
                days of delivery for unused items in original packaging.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p className="text-sm leading-relaxed">
                Electrify shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
              <p className="text-sm leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which Electrify operates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="text-sm leading-relaxed">
                For questions about these Terms of Service, please contact us at 
                <a href="mailto:legal@electrify.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  legal@electrify.com
                </a>
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-xs text-gray-500">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
