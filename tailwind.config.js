/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          // General UI
          background: "#ffffff", // Main background
          sectionBackground: "#f0f2fd", // Soft off-white section background
          navbarFooter: "#e4e7fb", // Light pastel purple for structure
          dividers: "#e4e7fb", // Soft gray-blue for section separation
          text: "#272145", // Deep navy for readability

          // Dashboard-Specific
          sidebarHeaderBackground: "#e4e7fb", // Sidebar & header background
          mainBackground: "#f0f2fd", // Dashboard main section background
          cardBackground: "#ffffff", // White for cards
          iconColor: "#5e4ab8", // Rich purple-blue for icons

          // Accents
          primaryCTA: "#7866d5", // Main button color (purple)
          secondaryAccent: "#b0b4f1", // Hover effects & subtle highlights
        },
  temp: {
                "color-1": "#f0f2fd",
                "color-2": "#e4e7fb",
                "color-3": "#ced2f7",
                "color-4": "#b0b4f1",
                "color-5": "#9190e9",
                "color-6": "#7c74e0",
                "color-7": "#7866d5",
                "color-8": "#5e4ab8",
                "color-9": "#4c3e95",
                "color-10": "#413877",
                "color-11": "#272145"
            },
       
      },
    },
    plugins: [],
  },
};
 