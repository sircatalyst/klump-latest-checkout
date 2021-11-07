<template>
    <klump-checkout-container>
        <template v-slot:header> Enter the code </template>
        <p class="mb-6">
            A code has been sent to <strong>+234 812 263 2296.</strong> You
            should get it within 20 seconds.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <ValidationProvider rules="required" v-slot="{ errors }">
                <klump-checkout-input
                    v-model="otp"
                    :customClass="'rounded'"
                    :inputProp="{
                        type: 'tel',
                        ref: 'otp',
                    }"
                    :errorMessages="errors"
                >
                    Enter the 6-digit code here
                </klump-checkout-input>
            </ValidationProvider>
            <div class="mb-8">
                <span
                    class="
                        inline-block
                        text-light-blue
                        underline
                        cursor-pointer
                    "
                    >Change phone number</span
                >
            </div>
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
import KlumpCheckoutButton from '../components/KlumpCheckoutButton.vue';
import KlumpCheckoutContainer from '../components/KlumpCheckoutContainer.vue';
import KlumpCheckoutInput from '../components/KlumpCheckoutInput.vue';

export default {
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
        KlumpCheckoutInput,
    },
    data() {
        return {
            otp: '',
            active: false,
        };
    },
    methods: {
        saveOtpCode(code) {
            this.otp = code;
        },
    },
};
</script>
