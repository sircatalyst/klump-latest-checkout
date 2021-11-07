<template>
    <klump-checkout-container>
        <template v-slot:header> Verify your details </template>
        <p class="mb-6">
            To secure your future payments, we need to verify it's you. Enter
            your mobile phone number to get started.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <ValidationProvider rules="phone-valid" v-slot="{ errors }">
                <div
                    class="flex items-center border-xs p-2 mb-6 rounded"
                    :class="errors[0] ? 'border-red-400' : 'border-input'"
                >
                    <vue-country-code
                        @onSelect="onSelect"
                        :preferredCountries="['ng']"
                    >
                    </vue-country-code>
                    <div class="border-l border-left-b">
                        <input
                            type="tel"
                            name=""
                            v-model="tel"
                            id=""
                            class="w-full outline-none pl-3"
                        />
                    </div>
                </div>
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center">
                        <input type="checkbox" name="" id="" />
                        <span class="inline-block ml-3"
                            >Remember me on this device</span
                        >
                    </div>
                    <div>
                        <svg
                            style="height: 20px; height: 20px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 z M 11 7 L 11 13 L 13 13 L 13 7 L 11 7 z M 11 15 L 11 17 L 13 17 L 13 15 L 11 15 z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <p class="text-xs text-primary-grey my-5">
                    This site is protected by reCAPTCHA Enterprise and the
                    Google
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
            </ValidationProvider>
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../validations.js';
import VueCountryCode from 'vue-country-code';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';

export default {
    name: 'VerifyYourDetails',
    components: {
        ValidationObserver,
        ValidationProvider,
        VueCountryCode,
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
    data() {
        return {
            dialCode: '',
            tel: '',
        };
    },
    watch: {
        dialCode() {
            this.tel = `+${this.dialCode}`;
        },
    },
    methods: {
        onSelect({ dialCode }) {
            this.dialCode = dialCode;
        },
        // convertToString(dialCode, phoneNumber) {
        //     return `+${dialCode.toString()}` + ' ' + phoneNumber.toString();
        // },
        // inputTelephone(event) {
        //     // this.tel = event.target.value !== '' ? event.target.value : null;
        // },
    },
    // mounted() {
    //     this.tel = this.formattedDialCode;
    // },
};
</script>
<style>
.vue-country-select {
    outline: none !important;
    border: none !important;
}
.vue-country-select .dropdown:hover {
    outline: none !important;
    background-color: white !important;
}
.vue-country-select .dropdown.open {
    outline: none !important;
    background-color: white !important;
}
.vue-country-select:focus-within {
    box-shadow: none !important;
}
input[type='checkbox'] {
    height: 20px;
    width: 20px;
}
</style>
