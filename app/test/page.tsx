export default function TestPage() {
    return (
      <main className="min-h-screen bg-hero-gradient text-brand-text flex flex-col items-center justify-center p-12 space-y-8">
        <h1 className="text-5xl font-display font-bold text-brand-accent drop-shadow-glow">
          Tailwind 4 Test Page ⚡
        </h1>
  
        <p className="max-w-lg text-center text-gray-300">
          If you can see colors, rounded corners, and smooth spacing — your Tailwind setup is working perfectly.
        </p>
  
        <div className="grid grid-cols-3 gap-6">
          <div className="h-24 w-24 bg-brand-accent rounded-xl shadow-glow flex items-center justify-center">
            <span className="text-black font-bold">Accent</span>
          </div>
          <div className="h-24 w-24 bg-brand-light rounded-xl flex items-center justify-center">
            <span>Light</span>
          </div>
          <div className="h-24 w-24 bg-brand-gray rounded-xl flex items-center justify-center">
            <span>Gray</span>
          </div>
        </div>
  
        <button className="bg-brand-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-brand-accent-muted transition shadow-glow">
          Test Button
        </button>
  
        <p className="text-sm text-gray-400">Font family test: <span className="font-mono">mono</span>, <span className="font-display">display</span>, <span className="font-sans">sans</span>.</p>
      </main>
    );
  }

  