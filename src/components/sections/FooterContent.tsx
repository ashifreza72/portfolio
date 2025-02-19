'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useScrollTo } from '@/hooks/useScrollTo';
import { downloadResume } from '@/utils/downloadResume';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface FooterLink {
  name: string;
  href: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/ashifreza72',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-ashif-aab83b259',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:mdashifreza72@gmail.com',
    icon: Mail,
  },
];

const footerLinks: FooterSection[] = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'Blog',
        href: '#',
        disabled: true,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
        },
      },
      {
        name: 'Resume',
        href: '#',
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          downloadResume();
        },
      },
      {
        name: 'Source Code',
        href: '#',
        disabled: true,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
        },
      },
    ],
  },
];

export function FooterContent() {
  const scrollTo = useScrollTo();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    onClick?: (e: React.MouseEvent) => void
  ) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('#', '');
      scrollTo(sectionId);
    }
  };

  return (
    <footer className='border-t bg-black/10 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='space-y-4 text-center lg:text-left'>
            <h2 className='text-xl font-bold gradient-text'>Ashif</h2>
            <p className='text-muted-foreground text-sm'>
              A passionate full-stack developer crafting beautiful digital
              experiences with modern technologies.
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className='space-y-4 text-center lg:text-left'
            >
              <h3 className='text-sm font-semibold uppercase tracking-wider'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        handleNavClick(e, link.href, link.onClick)
                      }
                      className={`text-muted-foreground transition-colors text-sm ${
                        link.disabled
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:text-blue-400'
                      }`}
                      aria-disabled={link.disabled}
                    >
                      {link.name}
                      {link.disabled && ' (Coming Soon)'}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className='space-y-4 text-center lg:text-left'>
            <h3 className='text-sm font-semibold uppercase tracking-wider'>
              Get in touch
            </h3>
            <p className='text-muted-foreground text-sm'>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className='flex space-x-4 justify-center lg:justify-start'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-blue-400 transition-colors'
                    aria-label={social.name}
                  >
                    <Icon className='h-5 w-5' />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <p className='text-muted-foreground text-sm'>
              © {new Date().getFullYear()} Ashif. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-muted-foreground'>
              <Link
                href='/privacy'
                className='hover:text-blue-400 transition-colors'
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href='/terms'
                className='hover:text-blue-400 transition-colors'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
