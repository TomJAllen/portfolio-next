import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="pt-28 px-8 md:px-20 max-w-6xl mx-auto">
      <h1 className="text-5xl font-display font-bold text-(--brand-accent) mb-10">All Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => <ProjectCard key={p.slug} project={p as any} />)}
      </div>
    </main>
  );
}
