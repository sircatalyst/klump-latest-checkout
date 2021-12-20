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
                document: '#212121',
                divider: '#F4F4F4',
                'doc-bg': '#F7F9FF',
                'dark-shade': 'rgba(0, 0, 0, 0.6);',
            },
            borderWidth: {
                xxs: '0.5px',
                xs: '0.883721px',
                sm: '1.5px',
            },
            borderRadius: {
                3: '3px',
                5: '5px',
                10: '10px',
            },
            lineHeight: {
                15: '15px',
                18: '18px',
                22: '22px',
                25: '25px',
                30: '30px',
            },
            width: {
                sm: '48.85%',
            },
            height: {
                input: '57.5px',
            },
            margin: {
                xs: '0.8px',
            },
            inset: {
                label: '17.5px',
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
