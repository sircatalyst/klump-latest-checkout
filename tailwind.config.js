module.exports = {
    purge: ['./index.html’, ‘./src/**/*.vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#192C69',
                'primary-grey': '#787573',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
