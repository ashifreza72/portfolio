import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
      <div className='relative max-w-4xl w-full h-[90vh] bg-background rounded-lg overflow-hidden'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-white/80 hover:text-white z-10'
        >
          Close
        </button>
        <div className='w-full h-full relative'>
          <Image
            src='/images/resume.jpg'
            alt='Resume'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </div>
  );
}
