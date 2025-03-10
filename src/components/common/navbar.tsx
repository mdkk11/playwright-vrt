// components/common/Navbar.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from './logo';

const Navbar = () => {
  return (
    <nav className="border-b bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Logo />
        <div className="flex items-center space-x-1 md:space-x-4">
          <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="px-3 py-2 text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="px-3 py-2 text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/auth/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// components/common/Footer.tsx

// components/common/Logo.tsx

// components/common/Container.tsx
