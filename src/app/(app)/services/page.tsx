// app/services/page.tsx
import Container from '@/components/common/container';
import ServiceList from '@/components/service-list';

export default function ServicesPage() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h1>
            <p className="text-lg text-gray-600">We offer a wide range of digital services to help your business grow and succeed online.</p>
          </div>
        </Container>
      </div>
      <Container>
        <ServiceList />
      </Container>
    </section>
  );
}
