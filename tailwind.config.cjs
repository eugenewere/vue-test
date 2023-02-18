/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        colors: {
            'accent': {
                100: '#ecf5f1',
                200: '#c7e2d6',
                300: '#a1cfbb',
                400: '#7bbca0',
                500: '#56a985',
                600: '#438468',
                700: '#305e4a',
                800: '#1d382c',
                900: '#09130f',
            },
            'secondary': {
                100: '#f9ebe8',
                200: '#eec4bb',
                300: '#e39c8d',
                400: '#d87460',
                500: '#cd4d32',
                600: '#9f3c27',
                700: '#722b1c',
                800: '#441a11',
                900: '#170906',
            }
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
