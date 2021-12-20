<template>
    <klump-checkout-container>
        <template v-slot:header> Verify your details </template>
        <p class="mb-6 leading-30">
            To secure your future payments, we need to verify it's you. Enter
            your mobile phone number to get started.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <form
                @submit.prevent="
                    gotoNextModal(invalid, { tel }, 'enterTheCodeModal')
                "
                autocomplete="off"
            >
                <ValidationProvider rules="phone-valid" v-slot="{ errors }">
                    <div class="relative">
                        <div
                            class="absolute border-r border-left-b"
                            style="top: 18px; left: 16px"
                        >
                            <vue-country-code
                                @onSelect="onSelect"
                                :preferredCountries="['ng']"
                            >
                            </vue-country-code>
                        </div>
                        <input
                            type="tel"
                            name=""
                            v-model="tel"
                            class="
                                w-full
                                outline-none
                                h-input
                                border-xs
                                py-1
                                mb-6
                                rounded
                            "
                            style="padding-left: 68px"
                            :class="
                                errors[0] ? 'border-red-400' : 'border-input'
                            "
                        />
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
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_4:411)">
                                    <path
                                        d="M10 0.616211C8.02219 0.616211 6.08879 1.2027 4.4443 2.30151C2.79981 3.40033 1.51809 4.96212 0.761209 6.78938C0.00433286 8.61664 -0.193701 10.6273 0.192152 12.5671C0.578004 14.5069 1.53041 16.2888 2.92894 17.6873C4.32746 19.0858 6.10929 20.0382 8.0491 20.4241C9.98891 20.8099 11.9996 20.6119 13.8268 19.855C15.6541 19.0981 17.2159 17.8164 18.3147 16.1719C19.4135 14.5274 20 12.594 20 10.6162C19.9971 7.96493 18.9426 5.42305 17.0679 3.54831C15.1932 1.67357 12.6513 0.619079 10 0.616211V0.616211ZM10 18.9495C8.35183 18.9495 6.74066 18.4608 5.37025 17.5451C3.99984 16.6294 2.93174 15.328 2.30101 13.8052C1.67028 12.2825 1.50525 10.607 1.82679 8.99046C2.14834 7.37395 2.94201 5.88909 4.10745 4.72365C5.27289 3.55822 6.75774 2.76454 8.37425 2.443C9.99076 2.12146 11.6663 2.28648 13.189 2.91721C14.7118 3.54794 16.0132 4.61605 16.9289 5.98646C17.8446 7.35687 18.3333 8.96803 18.3333 10.6162C18.3309 12.8256 17.4522 14.9438 15.8899 16.5061C14.3276 18.0684 12.2094 18.9471 10 18.9495Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M9.99998 8.94971H9.16665C8.94563 8.94971 8.73367 9.0375 8.57739 9.19378C8.42111 9.35007 8.33331 9.56203 8.33331 9.78304C8.33331 10.0041 8.42111 10.216 8.57739 10.3723C8.73367 10.5286 8.94563 10.6164 9.16665 10.6164H9.99998V15.6164C9.99998 15.8374 10.0878 16.0494 10.2441 16.2056C10.4003 16.3619 10.6123 16.4497 10.8333 16.4497C11.0543 16.4497 11.2663 16.3619 11.4226 16.2056C11.5788 16.0494 11.6666 15.8374 11.6666 15.6164V10.6164C11.6666 10.1743 11.4911 9.75042 11.1785 9.43786C10.8659 9.1253 10.442 8.94971 9.99998 8.94971Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M10 7.28272C10.6904 7.28272 11.25 6.72307 11.25 6.03272C11.25 5.34236 10.6904 4.78271 10 4.78271C9.30964 4.78271 8.75 5.34236 8.75 6.03272C8.75 6.72307 9.30964 7.28272 10 7.28272Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4:411">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                            transform="translate(0 0.616211)"
                                        />
                                    </clipPath>
                                </defs>
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
                    <span
                        @click="
                            gotoNextModal(invalid, { tel }, 'enterTheCodeModal')
                        "
                    >
                        <klump-checkout-button :disabled="invalid"
                            >Continue</klump-checkout-button
                        >
                    </span>
                </ValidationProvider>
            </form>
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import VueCountryCode from 'vue-country-code';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'VerifyYourDetails',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        VueCountryCode,
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
};
</script>
<style>
.vue-country-select {
    outline: none !important;
    border: none !important;
    padding: 0px !important;
}
.vue-country-select .dropdown:hover {
    outline: none !important;
    background-color: white !important;
}
.vue-country-select .dropdown {
    padding: 0px !important;
    padding-right: 4px !important;
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
