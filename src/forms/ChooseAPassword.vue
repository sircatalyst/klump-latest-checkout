<template>
    <klump-checkout-container>
        <template v-slot:header> Choose a password </template>
        <p class="mb-6">
            Your password should contain at least a number, a special character
            <strong>(.!@#%^&amp;),</strong> an uppercase and lowercase and must
            be at least 7 characters long.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <ValidationProvider
                rules="password-valid|required"
                v-slot="{ errors }"
            >
                <klump-checkout-input
                    v-model="password"
                    :customClass="'rounded'"
                    :inputProp="{
                        type: 'password',
                        ref: 'password',
                    }"
                    :errorMessages="errors"
                >
                    Password
                </klump-checkout-input>
            </ValidationProvider>
            <p class="text-xs text-primary-grey my-5">
                This site is protected by reCAPTCHA Enterprise and the Google
                <router-link to="#" class="text-black underline"
                    >Privacy Policy</router-link
                >
                and
                <router-link to="#" class="text-black underline"
                    >Terms of Service</router-link
                >
                apply.
            </p>
            <klump-checkout-button :disabled="invalid"
                >Continue</klump-checkout-button
            >
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput';

export default {
    name: 'WhatsYourEmail',
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    data() {
        return {
            password: '',
        };
    },
};
</script>
