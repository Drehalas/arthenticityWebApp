/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        arthenticity: {
          "primary": "#dc2626",           // Red
          "primary-content": "#ffffff",   // White
          "secondary": "#000000",         // Black
          "secondary-content": "#ffffff", // White
          "accent": "#ef4444",            // Light Red
          "accent-content": "#ffffff",    // White
          "neutral": "#1f2937",           // Dark Gray
          "neutral-content": "#ffffff",   // White
          "base-100": "#ffffff",          // White
          "base-200": "#f5f5f5",          // Light Gray
          "base-300": "#e5e5e5",          // Gray
          "base-content": "#000000"       // Black
        }
      }
    ],
  },
}