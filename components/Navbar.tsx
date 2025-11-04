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
    <nav className="flex justify-between items-center py-6 px-8 border-b border-brand-light bg-brand-gray/80 backdrop-blur sticky top-0 z-50 shadow-glow">
      <Link href="/" className="text-xl font-display font-bold text-brand-accent hover:text-brand-accent-muted transition">
        TOM ALLEN
      </Link>
      <div className="flex gap-6 text-brand-text">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-brand-accent transition ${pathname === href ? 'text-brand-accent' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
