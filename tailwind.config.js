/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                heading: ["var(--font-charm)", "sans-serif"],
                subheading: ["var(--font-cormorant)", "serif"],
                body: ["var(--font-montserrat)", "sans-serif"],
            },
            spacing: {
                section: "4rem",
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                },
            },
            colors: {
                primary: "#1a202c",
                secondary: "#718096",
                accent: "#f6ad55",
                background: "#f7fafc",
                heading: "#2d3748",
                subheading: "#4a5568",
                body: "#2d3748",
            },
        },
    },
    plugins: [],
}