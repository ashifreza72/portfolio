import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Phone, Download } from 'lucide-react';
import Image from 'next/image';
import { PDFViewer } from '@/components/PDFViewer';
import { downloadResume } from '@/utils/downloadResume';

export function HeroSection() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const phoneNumber = '+917272929079';

  const handleContactClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleResumeClick = () => {
    downloadResume();
  };

  return (
    <>
      <section
        id='home'
        className='pt-32 pb-20 px-4 relative overflow-hidden min-h-screen'
      >
        {/* Background Gradients */}
        <div className='absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50' />

        {/* Background Image */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90' />
          <Image
            src='/images/iStock-1051616786.jpg'
            alt='Background'
            fill
            priority
            className='object-cover opacity-20 mix-blend-luminosity'
            sizes='100vw'
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl' />
          <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl' />
        </div>

        {/* Content */}
        <div className='container mx-auto relative'>
          <div className='max-w-3xl'>
            <div className='flex items-center gap-4 mb-6'>
              <Button
                variant='outline'
                className='rounded-full border-blue-400/20 hover:border-blue-400/40'
                asChild
              >
                <a
                  href='https://github.com/ashifreza72'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' />
                  Follow on Github
                </a>
              </Button>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 gradient-text animate-float'>
              Hi, I&apos;m <span className='text-blue-400'>Md Ashif</span>
            </h1>

            <p className='text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto'>
              Let&apos;s build something amazing together!
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                onClick={handleContactClick}
                className='bg-blue-600 hover:bg-blue-700 group'
              >
                <Phone className='mr-2 h-4 w-4' />
                Contact Me
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Button>
              <Button
                variant='outline'
                className='border-blue-400 hover:bg-blue-400/10 group'
                onClick={handleResumeClick}
              >
                <Download className='mr-2 h-4 w-4' />
                Download Resume
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Button>
            </div>

            <div className='mt-12 flex flex-wrap gap-4'>
              <div className='glass px-4 py-2 rounded-full text-sm'>
                ⚡ Available for Freelance
              </div>
              <div className='glass px-4 py-2 rounded-full text-sm'>
                🚀 Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
      <PDFViewer isOpen={isPDFOpen} onClose={() => setIsPDFOpen(false)} />
    </>
  );
}
