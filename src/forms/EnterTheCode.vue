<template>
    <klump-checkout-container>
        <template v-slot:header> Enter the code </template>
        <p class="mb-6 leading-30">
            A code has been sent to <strong>+234 812 263 2296.</strong> You
            should get it within 20 seconds.
        </p>
        <klump-checkout-input
            @input="saveOtpCode"
            :customClass="'rounded'"
            :inputProp="{
                type: 'tel',
                ref: 'otp',
            }"
        >
            Enter the 6-digit code here
        </klump-checkout-input>
        <div class="mb-8">
            <router-link :to="{ name: 'verifyyourdetails' }">
                <span class="block text-light-blue underline cursor-pointer"
                    >Change phone number</span
                >
            </router-link>
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
        <klump-checkout-button>Continue</klump-checkout-button>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutButton from '../components/KlumpCheckoutButton.vue';
import KlumpCheckoutContainer from '../components/KlumpCheckoutContainer.vue';
import KlumpCheckoutInput from '../components/KlumpCheckoutInput.vue';

export default {
    name: 'EnterTheCode',
    components: {
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
