import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Build Amazing Digital Experiences</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">Our platform helps you create stunning websites and applications with modern technologies.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/services">
            <Button className="" size="lg">
              Our Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
