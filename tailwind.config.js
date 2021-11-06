module.exports = {
    purge: ['./index.html’, ‘./src/**/*.vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#192C69',
                'primary-grey': '#787573',
                input: '#E5E5E5',
                'left-b': 'rgba(143, 143, 143, 0.5)',
            },
            borderWidth: {
                xs: '0.883721px',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [],
};
