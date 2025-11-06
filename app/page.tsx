import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import QuoteSection from '@/components/QuoteSection';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <section className="py-24 px-8 md:px-20">
        <ProjectGrid />
      </section>
      <QuoteSection />
    </main>
  );
}