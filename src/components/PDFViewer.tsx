import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewer({ isOpen, onClose }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
      <div className='relative max-w-4xl w-full h-[90vh] bg-background rounded-lg overflow-hidden'>
        <div className='absolute top-4 right-4 z-10'>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}
            className='text-white/80 hover:text-white'
          >
            <X className='h-6 w-6' />
          </Button>
        </div>

        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-background'>
            <div className='text-muted-foreground'>Loading...</div>
          </div>
        )}

        {error && (
          <div className='absolute inset-0 flex items-center justify-center bg-background'>
            <div className='text-red-500'>
              Failed to load PDF. Please try again.
            </div>
          </div>
        )}

        <iframe
          src='/images/Ashif_Resume.pdf#toolbar=0'
          className='w-full h-full'
          title='Resume PDF'
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
        />

        {/* Download button */}
        <div className='absolute bottom-4 right-4 z-10'>
          <Button
            variant='outline'
            className='bg-blue-600 hover:bg-blue-700 text-white'
            onClick={() => window.open('/images/Ashif_Resume.pdf', '_blank')}
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
