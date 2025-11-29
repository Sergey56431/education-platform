/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts,tsx,js,jsx,scss}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0057ff',
                accent: '#ff8a3d',
                bgPage: '#f3f6fb',
                secondary: '#4a5b75',
                whiteCard: '#ffffff',
                cardBorder: '#e1e7fb',
                header: '#dde5f3',
                paleText: '#6b7b94',
                textColor: '#1f2a3c',
                pillBlueText: '#0057ff',
                pillOrangeText: '#ff8a3d',
                pillGreenText: '#0a9f4d',
            },
            backgroundColor: {
                lightCardBg: '#f7f9ff',
                pillBlueBg: '#e3eeff',
                pillOrangeBg: '#fff3e8',
                pillGreenBg: '#e9fff2',
                chipGrayBg: '#f3f6fb'
            },
            borderRadius: {
                mainRadius: '16px',
                insertRadiusCourse: '14px',
                insertRadiusTask: '12px',
                buttonRadius: '999px',
            }
        },
    },
    plugins: [],
}

