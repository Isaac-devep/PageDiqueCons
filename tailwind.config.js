/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./dist/index.html"
  ],
  safelist: [
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    { pattern: /from-\[\#[0-9A-Fa-f]{6}\]/ },
    { pattern: /via-\[\#[0-9A-Fa-f]{6}\]/ },
    { pattern: /to-\[\#[0-9A-Fa-f]{6}\]/ }
  ],
  theme: { extend: {} },
  plugins: [],
};
