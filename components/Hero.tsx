import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[80vh] grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 pt-28">
      <div className="space-y-6">
        <h1 className="text-6xl md:text-7xl font-display font-extrabold text-(--brand-accent) leading-[1.05] drop-shadow-(--glow)">
          Tom Allen
        </h1>
        <p className="text-lg text-(--brand-text)/85 max-w-md">
          Product Manager & Creative Technologist — building AI-driven experiences that merge strategy, design, and code.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="button button-primary">Explore Projects</Link>
          <Link href="/about" className="button border border-(--brand-accent) text-(--brand-accent) hover:bg-(--brand-accent) hover:text-black">
            About Me
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-[340px] h-[420px] md:w-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-(--brand-light) shadow-(--glow)">
          <Image
            src="/images/profile.jpg"   // add your photo
            alt="Tom Allen portrait"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
