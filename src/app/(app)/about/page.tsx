// app/about/page.tsx
import Container from '@/components/common/container';
import Company from '@/components/company';
import Team from '@/components/team';

export default function AboutPage() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">About Us</h1>
            <p className="text-lg text-gray-600">Learn more about our company, our mission, and the team behind our success.</p>
          </div>
        </Container>
      </div>
      <Container>
        <Company />
        <Team />
      </Container>
    </section>
  );
}
