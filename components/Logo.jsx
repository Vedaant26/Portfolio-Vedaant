import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <span className='p-2 kalam-regular text-3xl logo-text'>VM</span>
    </Link>
  );
};

export default Logo;
