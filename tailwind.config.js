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

       
      },
    },
    plugins: [],
  },
};
 