// components/about/Company.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Company = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="mb-4 text-gray-600">Founded in 2010, our company began with a simple mission: to help businesses succeed in the digital world. What started as a small team of passionate developers has grown into a full-service digital agency with clients across the globe.</p>
          <p className="mb-4 text-gray-600">Our approach combines technical expertise with creative thinking to deliver solutions that not only look great but also drive real business results. We believe in building long-term partnerships with our clients, understanding their unique challenges and opportunities.</p>
          <p className="mb-6 text-gray-600">{`Today, we're proud to have helped hundreds of businesses transform their digital presence and achieve their goals.`}</p>
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
        <div>
          <div className="rounded-lg bg-gray-200 p-4" style={{ height: '400px' }}>
            {/* Placeholder for company image */}
            <div className="flex h-full items-center justify-center text-gray-500">Company Image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
