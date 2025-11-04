import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tom Allen | Product & Tech Portfolio',
  description: 'Product Manager, Web Developer, and AI Enthusiast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white`}>
        <Navbar />
        <main className="min-h-screen px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
