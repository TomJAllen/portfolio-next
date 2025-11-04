import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-400 transition-all">
      <Image src={project.image} alt={project.title} width={800} height={500} className="object-cover w-full h-48 group-hover:opacity-90 transition" />
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-teal-400">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{project.role}</p>
        <p className="text-gray-500 text-sm">{project.summary}</p>
      </div>
    </Link>
  );
}
