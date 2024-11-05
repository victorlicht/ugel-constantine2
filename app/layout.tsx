import Providers from '@/components/providers';
import './globals.css';



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
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-800">
        <main className="container mx-auto px-4">
          <Providers>{children}</Providers></main>
      </body>
    </html>
  );
}
