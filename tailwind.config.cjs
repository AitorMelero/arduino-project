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
            "gray-2": "#1c1e21"
        },
    },
    plugins: [],
    darkMode: "class",
};
