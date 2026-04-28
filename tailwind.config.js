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
        brand: {
          // Purple scale — your core brand identity
          50:  "#f0f2fd", // lightest bg tints
          100: "#e4e7fb", // section backgrounds
          200: "#ced2f7", // borders, dividers
          300: "#b0b4f1", // subtle accents
          400: "#9190e9", // secondary elements
          500: "#7c74e0", // mid purple
          600: "#7866d5", // primary CTA
          700: "#5e4ab8", // icon color, active states
          800: "#4c3e95", // deep accent
          900: "#413877", // darker hover
          950: "#272145", // text, headings
        },

        // Semantic aliases for use in components
        // easier to read than brand-600 everywhere
        ui: {
          background:  "#ffffff",
          section:     "#f0f2fd", // brand-50
          navbar:      "#e4e7fb", // brand-100
          divider:     "#ced2f7", // brand-200
          text:        "#272145", // brand-950
          subtext:     "#6b7280", // neutral gray
          card:        "#ffffff",
          cta:         "#7866d5", // brand-600
          ctaHover:    "#5e4ab8", // brand-700
          accent:      "#b0b4f1", // brand-300
          icon:        "#5e4ab8", // brand-700
          success:     "#10b981",
          danger:      "#ef4444",
        },
      },

      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },

      gridTemplateColumns: {
        quarter: "80% 20%",
      },
    },
  },
  plugins: [],
};