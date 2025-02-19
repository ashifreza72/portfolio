'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useId } from 'react';

export function ContactSection() {
  const formId = useId();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:mdashifreza72@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id='contact' className='py-20 px-4 relative'>
      <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 to-purple-500/10 opacity-50' />
      <div className='container mx-auto relative'>
        <h2 className='text-3xl font-bold mb-12 gradient-text'>Get In Touch</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <p className='text-muted-foreground mb-8'>
              I&apos;m currently available for freelance work. Let&apos;s build
              something great together!
            </p>
            <div className='flex gap-4'>
              <Button
                variant='outline'
                size='icon'
                className='border-blue-400 hover:bg-blue-400/10'
                asChild
              >
                <a
                  href='https://github.com/ashifreza72'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='border-blue-400 hover:bg-blue-400/10'
                asChild
              >
                <a
                  href='https://www.linkedin.com/in/md-ashif-aab83b259'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='border-blue-400 hover:bg-blue-400/10'
                asChild
              >
                <a href='mailto:mdashifreza72@gmail.com'>
                  <Mail className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>
          <form id={formId} onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              value={formData.name}
              onChange={handleChange}
              className='w-full p-4 rounded-md glass focus:border-blue-400 transition-colors'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              value={formData.email}
              onChange={handleChange}
              className='w-full p-4 rounded-md glass focus:border-blue-400 transition-colors'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className='w-full p-4 rounded-md glass focus:border-blue-400 transition-colors'
            />
            <Button
              type='submit'
              disabled={isSubmitting}
              className='bg-blue-600 hover:bg-blue-700 w-full'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
