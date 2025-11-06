import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="py-16 px-6 bg-black">
      {/* 👇 this div wraps the ProjectCard components */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p as any} />
        ))}
      </div>
    </section>
  );
}
