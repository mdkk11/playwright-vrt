// layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

// app/layout.tsx
