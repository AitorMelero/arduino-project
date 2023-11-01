/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            "gray-1": "#23272f",
            "gray-2": "#1c1e21",
            "gray-3": "rgba(52, 58, 70, 0.8)",
            "gray-4": "rgba(235, 236, 240, 0.8)",
            "gray-5": "rgba(64, 71, 86, 1)",
            blue: "rgb(20, 158, 202)",
            "blue-2": "rgba(20, 158, 202, 0.1)",
            "blue-3": "rgb(8, 126, 164)",
        },
    },
    plugins: [],
    darkMode: "class",
};
