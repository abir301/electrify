import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p className="text-sm leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact our support team. This may include your name, email address, 
                shipping address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p className="text-sm leading-relaxed">
                We use the information we collect to process your orders, communicate with you about 
                your account and purchases, provide customer support, and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
              <p className="text-sm leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p className="text-sm leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
              <p className="text-sm leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze 
                site traffic, and understand where our visitors are coming from.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-sm leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@electrify.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  privacy@electrify.com
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

export default PrivacyPolicy;
