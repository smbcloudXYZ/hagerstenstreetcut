export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

      <div className="space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Hagersten StreetCut website, you accept
            and agree to be bound by the terms and provisions of this agreement.
            If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            2. Use of Website
          </h2>
          <p>
            This website is provided for informational purposes only. It
            displays customer reviews and information about our barber shop
            services. You may view and access the content for personal,
            non-commercial use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            3. Reviews and Content
          </h2>
          <p>
            The reviews displayed on this website are summaries of customer
            feedback. While we strive to present accurate information, we do not
            guarantee the completeness or accuracy of all reviews. Individual
            experiences may vary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            4. Booking and Services
          </h2>
          <p>
            Appointments are made by contacting us directly via text message at
            +46 72-853 82 88. By booking an appointment, you agree to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
            <li>Provide accurate contact information</li>
            <li>Arrive on time for your scheduled appointment</li>
            <li>Notify us in advance if you need to cancel or reschedule</li>
            <li>Pay for services rendered according to our pricing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Hagersten StreetCut or its content
            suppliers and is protected by copyright laws. You may not reproduce,
            distribute, or create derivative works without our express written
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites (such as
            Google Maps). We are not responsible for the content, accuracy, or
            practices of these external sites. Your use of third-party websites
            is at your own risk and subject to their terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            7. Disclaimer of Warranties
          </h2>
          <p>
            This website is provided "as is" without any warranties, express or
            implied. We do not warrant that the website will be uninterrupted,
            error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            8. Limitation of Liability
          </h2>
          <p>
            Hagersten StreetCut shall not be liable for any indirect,
            incidental, special, or consequential damages arising out of or in
            connection with your use of this website or our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            9. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to this website. Your
            continued use of the website after changes are posted constitutes
            your acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            10. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of Sweden. Any disputes arising from these terms or your
            use of this website shall be subject to the exclusive jurisdiction
            of the courts of Sweden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            11. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at +46 72-853 82 88.
          </p>
        </section>
      </div>
    </div>
  );
}
