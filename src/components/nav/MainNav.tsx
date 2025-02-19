'use client';

import { Button } from '@/components/ui/button';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavItem } from './NavItem';
import { NavMobile } from './NavMobile';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('home');
  };

  return (
    <nav className='fixed top-0 w-full glass z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <a
            href='#home'
            onClick={handleLogoClick}
            className='text-xl font-bold gradient-text hover:opacity-80 transition-opacity'
          >
            Ashif
          </a>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6'>
            {menuItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <NavMobile items={menuItems} onItemClick={() => setIsOpen(false)} />
        )}
      </div>
    </nav>
  );
}
