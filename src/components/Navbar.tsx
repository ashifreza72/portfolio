'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const sectionId = href.replace('#', '');
    scrollTo(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-4 h-20'>
        <div className='flex items-center justify-between h-full'>
          {/* Left section */}
          <div className='w-1/3 md:flex hidden'>
            <ul className='flex items-center gap-8'>
              {navLinks.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className='text-muted-foreground hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Logo */}
          <div className='flex-1 md:flex-none flex justify-center'>
            <Logo />
          </div>

          {/* Right section */}
          <div className='w-1/3 md:flex hidden justify-end'>
            <ul className='flex items-center gap-8'>
              {navLinks.slice(2).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className='text-muted-foreground hover:text-blue-400 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  variant='outline'
                  className='border-blue-400 hover:bg-blue-400/10'
                  asChild
                >
                  <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className='h-6 w-6' />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden'>
            <ul className='container mx-auto px-4 py-4 flex flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className='text-muted-foreground hover:text-blue-400 transition-colors block py-2'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  variant='outline'
                  className='border-blue-400 hover:bg-blue-400/10 w-full'
                  asChild
                >
                  <a
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
