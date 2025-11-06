import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import type { Project } from '@/types/project';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = (projects as Project[]).find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="pt-28 px-8 md:px-20 max-w-4xl mx-auto">
      <h1 className="text-5xl font-display font-bold text-(--brand-accent)">{project.title}</h1>
      <p className="text-(--brand-text)/70 mt-2">{project.role}</p>
      <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden border border-(--brand-light) shadow-(--glow) my-8">
        <Image src={project.image || '/images/placeholder.jpg'} alt={project.title} fill className="object-cover" />
      </div>
      <p className="text-(--brand-text)/85 leading-7">{project.content}</p>
      {project.tags?.length ? (
        <ul className="flex flex-wrap gap-2 mt-6">
          {project.tags.map(t => (
            <li key={t} className="text-xs px-3 py-1 rounded-full border border-(--brand-light) text-(--brand-text)/75">
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
