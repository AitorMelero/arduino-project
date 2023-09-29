/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "#ffffff",
            "primary-dark": "#23272f",
        },
    },
    plugins: [],
    darkMode: "class",
};
