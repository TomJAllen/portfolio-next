import Link from 'next/link';
import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold mb-6">Tom Allen</h1>
      <p className="text-lg text-gray-300 mb-8">
        Tech-driven product manager and creative builder. Exploring AI, design, and code to craft better digital experiences.
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <Link href="/projects" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          View Projects
        </Link>
        <Link href="/about" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          About Me
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
