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
      "light",
      {
        dark: {
          "primary": "#4F46E5",          // Deep indigo as primary color (jewel tone)
          "primary-focus": "#4338CA",    // Darker shade of primary
          "primary-content": "#ffffff",  // White text on primary
          
          "secondary": "#0EA5E9",        // Bright blue as secondary color
          "secondary-focus": "#0284C7",  // Darker shade of secondary
          "secondary-content": "#ffffff", // White text on secondary
          
          "accent": "#EC4899",           // Vibrant pink as accent
          "accent-focus": "#DB2777",     // Darker shade of accent
          "accent-content": "#ffffff",    // White text on accent
          
          "neutral": "#1E293B",          // Dark slate blue for neutral elements
          "neutral-focus": "#0F172A",    // Darker shade of neutral
          "neutral-content": "#ffffff",   // White text on neutral
          
          "base-100": "#121212",         // Dark gray background (Material Design recommended)
          "base-200": "#1E1E1E",         // Slightly lighter dark gray
          "base-300": "#2C2C2C",         // Even lighter dark gray for contrast
          "base-content": "#E2E8F0",      // Light gray text on base for better readability
          
          "info": "#38BDF8",             // Sky blue for info
          "success": "#22C55E",          // Green for success
          "warning": "#F59E0B",          // Amber for warning
          "error": "#EF4444",            // Red for error
        },
      },
      "cupcake",
    ],
  },
}