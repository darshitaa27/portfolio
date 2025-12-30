/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                "primary-glow": "rgba(94, 106, 210, 0.5)",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
                neon: "0 0 10px #5e6ad2, 0 0 20px #5e6ad2"
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            }
        },
    },
    plugins: [],
}
