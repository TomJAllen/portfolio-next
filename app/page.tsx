import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import QuoteSection from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <div className="bg-red-500 p-10 text-center">test</div>
      <Hero />
      <ProjectGrid />
      <QuoteSection />
    </main>
  );
}
