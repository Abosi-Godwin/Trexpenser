/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
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
            width: {
                "1/10": "10%",
                "9/10": "90%",
                40: "40%",
                50: "50%"
            }
        }
    },
    plugins: []
};
