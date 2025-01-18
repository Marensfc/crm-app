import clsx from 'clsx';
import * as React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx('px-10 mx-auto max-w-[1200px]', className && className)}
    >
      {children}
    </div>
  );
}
