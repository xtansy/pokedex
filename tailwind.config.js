/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.tsx"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "0rem",
            },
        },
        extend: {
            backgroundImage: {
                cover: "var(--image-cover)",
            },
        },
    },
    plugins: [],
};
