import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '{_field_} is required',
});

extend('email', {
    ...email,
    message: '{_field_} is not valid',
});

extend('phone-valid', (value) => {
    const phoneRegex =
        /^[+][0-9]+[\s.-]?[(]?[0-9]+[)]?[\s.-]?[0-9]{3}[\s.-]?[0-9]{3,11}$/;
    return phoneRegex.test(value);
});
