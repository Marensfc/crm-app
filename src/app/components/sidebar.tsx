'use client';

import React from 'react';
import Image from 'next/image';

import logo from '../../../public/icons/logo.svg';
import exitIcon from '../../../public/icons/arrow-left-on-rectangle.svg';
import squares from '../../../public/icons/squares-2x2.svg';
import briefcase from '../../../public/icons/briefcase.svg';

import SidebarItem from './sidebar-item';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './button';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-900 text-zinc-50 font-medium flex flex-col basis-60 pt-9 pb-10 items-center">
      <Image className="mb-20" src={logo} alt="logo" width={122} height={24} />
      <ul className="self-start flex flex-col gap-7 pl-6 w-full">
        <SidebarItem
          href="/dashboard"
          src={squares}
          alt="squares"
          current={pathname === '/dashboard'}
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          href="/companies"
          src={briefcase}
          alt="briefcase"
          current={pathname === '/companies'}
        >
          Companies
        </SidebarItem>
      </ul>
      <Link href="/" className="mt-auto flex gap-2">
        <Image src={exitIcon} alt="Exit icon" width={18} height={18} />
        Exit
      </Link>
    </aside>
  );
}
