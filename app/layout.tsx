import Providers from '@/components/Providers';
import './globals.css';
import { Sidebar } from 'lucide-react';



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
    <html lang="ar" dir="rtl" className=''>
      <body className="bg-gray-50 text-gray-800">
        <main>
          <Providers>{children}</Providers></main>
      </body>
    </html>
  );
}
