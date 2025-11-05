import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectGrid() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[var(--brand-gray)]">
      <h2 className="text-4xl font-display font-bold text-[var(--brand-accent)] mb-12 text-center">
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p) => <ProjectCard key={p.slug} project={p as any} />)}
      </div>
    </section>
  );
}
