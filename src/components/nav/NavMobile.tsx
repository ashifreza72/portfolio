'use client';

import { useScrollTo } from '@/hooks/useScrollTo';

interface NavMobileProps {
  items: Array<{ name: string; href: string }>;
  onItemClick: () => void;
}

export function NavMobile({ items, onItemClick }: NavMobileProps) {
  const scrollTo = useScrollTo();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollTo(sectionId);
    onItemClick();
  };

  return (
    <div className='md:hidden py-4 space-y-2'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className='block py-2 hover:text-blue-400 transition-colors cursor-pointer'
          onClick={(e) => handleClick(e, item.href)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
