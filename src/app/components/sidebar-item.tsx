import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface SidebarItemProps {
  current?: boolean;
  children: React.ReactNode;
  href: string;
  src: string;
  alt: string;
}

export default function SidebarItem({
  current,
  children,
  href,
  src,
  alt,
}: SidebarItemProps) {
  console.log(current);

  return (
    <li className="relative">
      <Link
        href={href}
        className={clsx(
          'flex items-center gap-3.5 w-fit',
          current &&
            'after:content-[""] after:inline-block after:w-1 after:h-9 after:bg-purple-200 after:rounded-sm after:absolute after:right-1',
        )}
      >
        <Image src={src} alt={alt} />
        {children}
      </Link>
    </li>
  );
}
