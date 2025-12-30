'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const LayoutTextFlip = ({ duration = 3000 }: { duration?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const statuses = [
    { text: 'Available for Freelance', color: 'emerald' },
    { text: 'Open for Internships', color: 'yellow' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statuses.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  const currentStatus = statuses[currentIndex];
  const isGreen = currentStatus.color === 'emerald';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-2 py-0.5 shadow-sm transition-colors duration-500 sm:gap-2 sm:px-3',
        isGreen
          ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/50'
          : 'border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-950/50'
      )}
    >
      {/* Fixed Pulsating Circle - shrink-0 ensures it stays put */}
      <span className={cn('relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2')}>
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            isGreen ? 'bg-emerald-500' : 'bg-yellow-500'
          )}
        ></span>
        <span
          className={cn(
            'relative inline-flex h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2',
            isGreen ? 'bg-emerald-500' : 'bg-yellow-500'
          )}
        ></span>
      </span>

      {/* Fixed-width wrapper for the text to prevent shifting the circle */}
      <div className="relative flex items-center sm:h-5 sm:w-[120px]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -15, filter: 'blur(4px)', opacity: 0 }}
            animate={{
              y: 0,
              filter: 'blur(0px)',
              opacity: 1,
            }}
            exit={{ y: 15, filter: 'blur(4px)', opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className={cn(
              'absolute inline-block text-[10px] font-medium whitespace-nowrap sm:text-xs',
              isGreen
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-yellow-700 dark:text-yellow-400'
            )}
          >
            {currentStatus.text}
          </motion.span>
        </AnimatePresence>
      </div>
    </span>
  );
};