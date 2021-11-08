import { extend } from 'vee-validate';

extend('phone-valid', (value) => {
    const phoneRegex =
        /^[+][0-9]+[\s.-]?[(]?[0-9]+[)]?[\s.-]?[0-9]{3}[\s.-]?[0-9]{3,11}$/;
    return phoneRegex.test(value);
});
