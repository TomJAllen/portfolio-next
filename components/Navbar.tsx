'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-(--brand-gray)/80 backdrop-blur border-b border-(--brand-light) shadow-(--glow)">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-display font-bold text-(--brand-accent) hover:text-(--brand-accent-muted) transition">
          TOM ALLEN
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-(--brand-text) hover:text-(--brand-accent) transition ${
                pathname === href ? 'text-(--brand-accent)' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
