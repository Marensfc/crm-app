import React from 'react';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plus_jakarta_sans.className}>
      <body>{children}</body>
    </html>
  );
}
