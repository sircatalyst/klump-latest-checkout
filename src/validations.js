import { extend } from 'vee-validate';
import { required, email, image } from 'vee-validate/dist/rules';

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
        /^[0-9]+[\s.-]?[(]?[0-9]+[)]?[\s.-]?[0-9]{3}[\s.-]?[0-9]{3,11}$/;
    return phoneRegex.test(value);
});

extend('password-valid', (value) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    return passwordRegex.test(value);
});

extend('image', {
    ...image,
    message: '{_field_} must be an image',
});

extend('bvn-valid', (value) => {
    const bvnRegex = /^[0-9]{11}$/;
    return bvnRegex.test(value);
});

extend('terms-checked', (value) => {
    return value === true;
});
