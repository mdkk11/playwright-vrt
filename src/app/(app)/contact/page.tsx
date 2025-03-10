import Container from '@/components/common/container';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h1>
            <p className="text-lg text-gray-600">{`Have a question or want to work with us? We'd love to hear from you.`}</p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Contact</h3>
                  <p className="text-gray-600">
                    info@example.com
                    <br />
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9AM - 5PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
