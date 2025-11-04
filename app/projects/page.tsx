import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
