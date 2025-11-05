export default function Footer() {
  return (
    <footer className="text-center py-10 mt-20 border-t border-[var(--brand-light)] text-[var(--brand-text)]/70">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://www.linkedin.com/in/tom-j-allen/" target="_blank" className="text-[var(--brand-accent)] hover:text-[var(--brand-accent-muted)]">LinkedIn</a>
        <a href="mailto:thomasjamesallen91@gmail.com" className="text-[var(--brand-accent)] hover:text-[var(--brand-accent-muted)]">Email</a>
      </div>
      <p>© {new Date().getFullYear()} Tom Allen — Built with Next.js & Tailwind</p>
    </footer>
  );
}
