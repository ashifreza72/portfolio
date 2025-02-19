'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { downloadResume } from '@/utils/downloadResume';
import { Icon } from '@iconify/react';
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Icon component with no SSR
const IconComponent = dynamic(
  () => import('@iconify/react').then((mod) => mod.Icon),
  {
    ssr: false,
    loading: () => (
      <div className='w-14 h-14 bg-blue-400/10 rounded-lg animate-pulse' />
    ),
  }
);

const skills = [
  {
    name: 'React',
    icon: 'logos:react',
    color: '#61DAFB',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    color: '#3178C6',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    color: '#339933',
  },
  {
    name: 'Next.js',
    icon: 'logos:nextjs-icon',
    color: '#000000',
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    color: '#06B6D4',
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    color: '#47A248',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
    color: '#F05032',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    color: '#F7DF1E',
  },
  {
    name: 'HTML5',
    icon: 'logos:html-5',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    icon: 'logos:css-3',
    color: '#1572B6',
  },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || !isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPos = 0;
    const scrollSpeed = 2;
    const resetThreshold = container.scrollWidth / 2;

    const animate = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= resetThreshold) {
        scrollPos = 0;
      }
      if (container) {
        container.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, isMobile]);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <section id='about' className='py-12 px-4 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl' />
      <div className='absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-10 space-y-3'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 relative'>
            <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent'>
              About Me
            </span>
            <div className='absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl' />
            <div className='absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl' />
          </h2>

          <div className='flex justify-center gap-2 mb-6'>
            <span className='w-2 h-2 rounded-full bg-blue-400/50' />
            <span className='w-3 h-2 rounded-full bg-purple-400/50' />
            <span className='w-2 h-2 rounded-full bg-blue-400/50' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Image Section */}
          <div className='relative group'>
            <div className='relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl shadow-blue-500/5 border border-white/10 hover:border-blue-500/20 transition-all duration-300'>
              <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity' />
              <Image
                src='/images/about.jpg'
                alt='Ashif Profile'
                fill
                className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='absolute inset-0 border-2 border-blue-400/20 rounded-xl -m-2 group-hover:m-0 transition-all duration-300' />
          </div>

          {/* Content Section */}
          <div className='space-y-6'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              <span className='text-blue-400 font-semibold'>Hi there!</span> I'm
              a{' '}
              <span className='text-purple-400 font-semibold'>
                Full Stack Developer
              </span>{' '}
              passionate about creating beautiful and functional web
              applications.
            </p>

            <p className='text-muted-foreground leading-relaxed'>
              With a strong foundation in modern web technologies and a keen eye
              for design, I specialize in building responsive and user-friendly
              applications that solve real-world problems.
            </p>

            {/* Skills Section */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                Skills & Technologies
              </h3>
              <div className='relative p-3 rounded-xl bg-black/5 backdrop-blur-sm border border-white/10 shadow-xl shadow-blue-500/5'>
                {isMobile && (
                  <>
                    <div className='absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none' />
                    <div className='absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />
                  </>
                )}
                <div
                  ref={containerRef}
                  className={`
                    flex gap-3 py-3
                    ${
                      isMobile
                        ? 'overflow-x-auto scrollbar-hide'
                        : 'md:grid md:grid-cols-4 lg:grid-cols-5 flex-wrap'
                    }
                  `}
                >
                  {(isMobile ? [...skills, ...skills, ...skills] : skills).map(
                    (skill, index) => (
                      <div
                        key={`${skill.name}-${index}`}
                        className='flex-shrink-0 w-28 aspect-square p-3 rounded-xl bg-black/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 group flex flex-col items-center justify-center gap-2 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10'
                      >
                        <div className='relative w-14 h-14 flex items-center justify-center'>
                          <IconComponent
                            icon={skill.icon}
                            className='w-14 h-14 group-hover:scale-110 transition-transform duration-300'
                          />
                        </div>
                        <span className='text-sm font-medium text-center text-muted-foreground group-hover:text-blue-400 transition-colors'>
                          {skill.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={downloadResume}
              className='bg-blue-600 hover:bg-blue-700 mt-4 group shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30'
            >
              <Download className='mr-2 h-4 w-4' />
              Download Resume
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
