import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-800 hover:border-cyan-400 transition-all"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/images/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="bg-gray-900 p-5">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400">{project.role}</p>
        <p className="text-sm text-gray-500 mt-1">{project.summary}</p>
      </div>
    </Link>
  );
}
