import Link from 'next/link';
import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 pt-32 text-center">
      <section className="max-w-3xl space-y-8">
        <h1 className="text-6xl font-display font-extrabold text-[var(--brand-accent)] drop-shadow-[var(--glow)]">
          Tom Allen
        </h1>
        <p className="text-lg text-[var(--brand-text)]/80">
          Tech-driven product manager and creative builder — exploring AI,
          design, and code to craft better digital experiences.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/projects"
            className="button button-primary"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="button border border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-black transition"
          >
            About Me
          </Link>
        </div>
      </section>

      <section className="mt-20 grid sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
