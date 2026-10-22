import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/styles/global.css';
import Interactions from './interactions';

export const metadata: Metadata = {
  title: 'VISUALGV — A Creative Technology Studio',
  description:
    'VISUALGV is a New York–based creative technology studio building software, music, photography, and design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  );
}
