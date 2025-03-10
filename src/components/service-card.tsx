import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href={link}>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
