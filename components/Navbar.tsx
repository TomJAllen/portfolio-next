'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-8 border-b border-gray-700 bg-gray-900/60 backdrop-blur sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-tight">TOM ALLEN</Link>
      <div className="flex gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-teal-400 transition ${pathname === href ? 'text-teal-400' : 'text-white'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
