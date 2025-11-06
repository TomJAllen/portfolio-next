export default function ContactPage() {
    return (
      <main className="pt-28 px-8 md:px-20 max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl font-display font-bold text-(--brand-accent)">Contact</h1>
        <p className="text-(--brand-text)/85">Reach out any time:</p>
        <ul className="space-y-2">
          <li><a className="text-(--brand-accent) hover:text-(--brand-accent-muted)" href="mailto:thomasjamesallen91@gmail.com">thomasjamesallen91@gmail.com</a></li>
          <li><a className="text-(--brand-accent) hover:text-(--brand-accent-muted)" target="_blank" href="https://www.linkedin.com/in/tom-j-allen/">LinkedIn</a></li>
        </ul>
      </main>
    );
  }
  