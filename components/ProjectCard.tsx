import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-[var(--brand-light)] bg-[var(--brand-gray)] hover:border-[var(--brand-accent)] transition-all shadow-[var(--glow)]"
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={project.image || '/images/placeholder.jpg'}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:opacity-90 transition-opacity"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--brand-text)] group-hover:text-[var(--brand-accent)] transition">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--brand-text)]/70">{project.role}</p>
        <p className="text-sm text-[var(--brand-text)]/60 mt-1">{project.summary}</p>
      </div>
    </Link>
  );
}
