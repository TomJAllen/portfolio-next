import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectGrid() {
  return (
    <section className="">
      <h2 className="text-4xl font-display font-bold text-(--brand-accent) mb-12 text-center">
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => <ProjectCard key={p.slug} project={p as any} />)}
      </div>
    </section>
  );
}
