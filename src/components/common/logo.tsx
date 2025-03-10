import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-xl font-bold text-primary">
      <span>SampleSite</span>
    </Link>
  );
};

export default Logo;
