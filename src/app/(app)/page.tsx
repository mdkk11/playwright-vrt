// app/page.tsx
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Features />
      <Testimonials />
    </section>
  );
}
