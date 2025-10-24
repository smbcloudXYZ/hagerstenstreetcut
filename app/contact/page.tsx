export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="space-y-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you want to book an appointment
            or have questions about our services, feel free to reach out.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Booking
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Text to book:</span>
                </p>
                <a
                  href="tel:+46728538288"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  +46 72-853 82 88
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Send us a text message with your preferred date and time, and
                  we'll confirm your appointment.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Location
              </h3>
              <p className="text-gray-700 mb-2">
                Hagersten StreetCut
                <br />
                South of Stockholm, Sweden
              </p>
              <a
                href="https://maps.app.goo.gl/f4irVqGC9KGHzRDP9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✂️</span>
                  <span>Professional barber services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⭐</span>
                  <span>Highly rated by customers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Convenient location in South Stockholm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💬</span>
                  <span>Easy booking via text message</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Business Hours
              </h3>
              <p className="text-gray-700">
                Contact us to check availability and book your appointment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-gray-700 mb-4">
            Text us at{" "}
            <a
              href="tel:+46728538288"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              +46 72-853 82 88
            </a>{" "}
            and let us know when you'd like to visit. We'll get back to you as
            soon as possible!
          </p>
        </section>
      </div>
    </div>
  );
}
