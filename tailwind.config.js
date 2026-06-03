/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#0c0c0c',
        slate:        '#3E454B',
        paper:        '#f5f0e8',
        cream:        '#ede8dc',
        rule:         '#c8bfa8',
        muted:        '#5a5348',
        teal:         '#2d7a5f',
        'teal-light': '#4aab85',
        danger:       '#c41c1c',
        amber:        '#b07d2a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
