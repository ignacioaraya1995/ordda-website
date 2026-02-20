import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Ordda Admin — Documentation',
  description: 'Internal documentation for the Ordda backend architecture.',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-700`}>
        {children}
      </body>
    </html>
  );
}
