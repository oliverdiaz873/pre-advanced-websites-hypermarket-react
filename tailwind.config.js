/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            scale: {
                '33': '0.33',
                '66': '0.66',
            }
        },
    },
    plugins: [],
}
