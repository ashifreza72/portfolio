import Link from 'next/link';
import { useScrollTo } from '@/hooks/useScrollTo';

export function Logo() {
  const scrollTo = useScrollTo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('home');
  };

  return (
    <Link href='#home' onClick={handleClick} className='group inline-block'>
      <div className='flex items-center space-x-2'>
        <div className='font-bold text-2xl tracking-tight relative'>
          <span className='text-blue-500 absolute -left-4 top-0 opacity-75 group-hover:-translate-x-1 transition-transform'>
            {'<'}
          </span>
          <span className='relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent px-1'>
            Ashif
          </span>
          <span className='text-blue-500 absolute -right-4 top-0 opacity-75 group-hover:translate-x-1 transition-transform'>
            {'/>'}
          </span>
          <div className='absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity' />
        </div>
      </div>
    </Link>
  );
}
