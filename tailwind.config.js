/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#0b0e13',
                'brand-gray': '#1a1f29',
                'brand-light': '#2a3140',
                'brand-accent': '#00f6ff',
                'brand-accent-muted': '#66fcf1',
                'brand-text': '#e5e7eb',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                display: ['Poppins', 'ui-sans-serif', 'system-ui'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            boxShadow: {
                glow: '0 0 20px rgba(0, 246, 255, 0.4)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom right, #0b0e13, #1a1f29, #2a3140)',
            },
            }
          
    },
    plugins: [],
  };
  