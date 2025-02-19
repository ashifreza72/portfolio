import { Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A modern web application built with Next.js, TypeScript, and Tailwind CSS.',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  // ... other projects
];

export function FeaturedProjects() {
  return (
    <section id='projects' className='py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-black/5 backdrop-blur-2xl rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/20 transition-colors'
            >
              <div className='relative h-48 md:h-64'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <div className='px-4 py-2 rounded-md border border-blue-400/20 bg-transparent flex items-center gap-2 text-sm text-muted-foreground opacity-50 cursor-not-allowed select-none'>
                    <LinkIcon className='h-4 w-4' />
                    Demo
                  </div>
                  <div className='px-4 py-2 rounded-md border border-blue-400/20 bg-transparent flex items-center gap-2 text-sm text-muted-foreground opacity-50 cursor-not-allowed select-none'>
                    <Github className='h-4 w-4' />
                    Code
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
