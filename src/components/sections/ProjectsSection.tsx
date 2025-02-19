import { Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'Stripe',
      ],
      demoUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team workspace features.',
      image:
        'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=450&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
      demoUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/yourusername/taskmanager',
    },

    {
      id: 4,
      title: 'Social Media Dashboard',
      description:
        'A comprehensive dashboard for managing and analyzing social media accounts across platforms.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      technologies: ['Vue.js', 'Express', 'GraphQL', 'D3.js', 'Firebase'],
      demoUrl: 'https://dashboard-demo.com',
      githubUrl: 'https://github.com/yourusername/social-dashboard',
    },
    {
      id: 5,
      title: 'Real-time Chat App',
      description:
        'A modern chat application with features like group messaging, file sharing, and video calls.',
      image:
        'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux', 'Node.js'],
      demoUrl: 'https://chat-demo.com',
      githubUrl: 'https://github.com/yourusername/chat-app',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description:
        'A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=450&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      demoUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description:
        'An AI-powered content generation tool that creates unique articles and social media posts. Coming Soon!',
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL'],
      status: 'upcoming',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id='projects' className='py-12 px-4'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-10 space-y-3'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 relative'>
            <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent'>
              Projects
            </span>
            <div className='absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl' />
            <div className='absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl' />
          </h2>

          <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Here are some of the projects I&apos;ve worked on.{' '}
            <span className='text-blue-400'>Each project</span> is crafted with{' '}
            <span className='text-purple-400'>attention to detail</span> and{' '}
            <span className='text-blue-400'>best practices</span>.
          </p>

          <div className='flex justify-center gap-2 mt-4'>
            <span className='w-2 h-2 rounded-full bg-blue-400/50' />
            <span className='w-3 h-2 rounded-full bg-purple-400/50' />
            <span className='w-2 h-2 rounded-full bg-blue-400/50' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-black/5 backdrop-blur-2xl rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/20 transition-all duration-300 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10'
            >
              <div className='relative h-44'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground mb-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-3'>
                  {project.status === 'upcoming' ? (
                    <div className='px-4 py-2 rounded-md border border-blue-400/20 bg-black/20 flex items-center gap-2 text-sm text-muted-foreground'>
                      <LinkIcon className='h-4 w-4' />
                      Coming Soon
                    </div>
                  ) : (
                    <>
                      <div className='px-4 py-2 rounded-md border border-blue-400/20 bg-black/20 flex items-center gap-2 text-sm text-muted-foreground'>
                        <LinkIcon className='h-4 w-4' />
                        Demo
                      </div>
                      <div className='px-4 py-2 rounded-md border border-blue-400/20 bg-black/20 flex items-center gap-2 text-sm text-muted-foreground'>
                        <Github className='h-4 w-4' />
                        Code
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
