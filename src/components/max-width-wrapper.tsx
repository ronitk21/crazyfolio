import React from 'react';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative mx-auto h-full w-full max-w-2xl px-4 py-5 sm:px-10">{children}</div>;
};

export default MaxWidthWrapper;
