'use client';

import { useScrollTo } from '@/hooks/useScrollTo';

interface NavItemProps {
  name: string;
  href: string;
}

export function NavItem({ name, href }: NavItemProps) {
  const scrollTo = useScrollTo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollTo(sectionId);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className='hover:text-blue-400 transition-colors cursor-pointer'
    >
      {name}
    </a>
  );
}
