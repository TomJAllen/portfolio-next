import projects from '@/data/projects.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.role}</p>
      <Image src={project.image} alt={project.title} width={900} height={500} className="rounded-xl mb-8" />
      <p className="text-gray-300 leading-relaxed mb-6">{project.content}</p>
      <ul className="flex flex-wrap gap-3">
        {project.tags?.map((tag) => (
          <li key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tag}</li>
        ))}
      </ul>
    </section>
  );
}
