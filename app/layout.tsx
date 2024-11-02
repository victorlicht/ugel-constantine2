import { Inter } from 'next/font/google';
import './globals.css';
import { Session } from 'inspector/promises';
import { SessionProvider } from 'next-auth/react';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Application',
  description: 'A University Complaints Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={inter.className} >
      <body className="bg-gray-50 text-gray-800">
        <main className="container mx-auto px-4"><Providers>{children}</Providers></main>
      </body>
    </html>
  );
}
