'use client';

export const LayoutTextFlip = () => {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/50">
      {/* Pulsating Circle */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>

      {/* Text */}
      <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400">
        Open to Work
      </span>
    </span>
  );
};
