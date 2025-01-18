import * as React from 'react';
import magnifyingGlass from '../../../public/icons/magnifying-glass.svg';
import Image from 'next/image';

export interface SearchInputProps {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="relative w-[456px]">
      <input
        type="search"
        className="w-full h-11 bg-transparent border border-solid border-gray-300 rounded pl-3 pr-9 outline-none hover:border-gray-900 focus:border-gray-900 transition-colors"
        name="search-input"
        placeholder="Search..."
      />
      <Image
        src={magnifyingGlass}
        className="absolute top-3 right-3"
        alt="Magnifying glass"
        width={20}
        height={20}
      />
    </div>
  );
}
