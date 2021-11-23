module.exports = {
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#192C69',
                'primary-grey': '#787573',
                input: '#E5E5E5',
                'left-b': 'rgba(143, 143, 143, 0.5)',
                'light-blue': '#4062D1',
                tertiary: '#4CAF50',
                secondary: '#171717',
                divider: '#F4F4F4',
            },
            borderWidth: {
                xs: '0.883721px',
                sm: '1.5px',
            },
            lineHeight: {
                30: '30px',
                25: '25px',
                22: '22px',
            },
            width: {
                sm: '48.85%',
            },
            margin: {
                xs: '0.8px',
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
