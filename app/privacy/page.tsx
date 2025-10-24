export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

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
            Introduction
          </h2>
          <p>
            Welcome to Hagersten StreetCut. This privacy policy explains how we
            handle information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Information We Collect
          </h2>
          <p className="font-semibold text-gray-900">
            We do not collect any personal data or information from visitors to
            our website.
          </p>
          <p className="mt-2">
            Our website is purely informational and does not use cookies,
            tracking technologies, analytics tools, or any other means of
            collecting personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites, such as our
            Google Maps page. Please note that we are not responsible for the
            privacy practices of these external sites. We encourage you to read
            the privacy policies of any third-party websites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Booking and Contact
          </h2>
          <p>
            If you contact us via text message at +46 72-853 82 88 to book an
            appointment, any information you share will be handled solely for
            the purpose of scheduling your appointment. We do not store or share
            this information beyond what is necessary to provide our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at +46 72-853 82 88.
          </p>
        </section>
      </div>
    </div>
  );
}
