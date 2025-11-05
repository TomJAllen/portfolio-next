export default function QuoteSection() {
    return (
      <section className="py-24 px-8 md:px-20 text-center">
        <blockquote className="text-2xl md:text-3xl text-[var(--brand-text)] font-display italic max-w-3xl mx-auto leading-relaxed">
          “Technology is best when it brings people together.”
        </blockquote>
        <div className="h-1 w-24 bg-[var(--brand-accent)] mx-auto mt-8 rounded-full"></div>
      </section>
    );
  }
  