import * as React from 'react';
import avatar from '../../../public/images/user.png';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="px-10 flex justify-between items-center py-6 border-b border-solid">
      <h1 className="text-3xl font-medium">{children}</h1>
      <div className="flex items-center before:content-[''] before:w-px before:h-11 before:bg-gray-300 before:mr-5">
        <Image
          className="mr-3"
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
        />
        <div>
          <p className="text-base font-semibold">Adam Smith</p>
          <a href="mailto:adamsmith@gmail.com" className="text-sm font-light">
            adamsmith@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}
