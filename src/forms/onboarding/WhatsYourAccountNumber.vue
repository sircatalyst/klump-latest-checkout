<template>
    <klump-checkout-container>
        <template v-slot:header> What is your account number?</template>
        <p class="mb-6 leading-30">
            We won’t use this for anything rather than identification
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="submitAccountNumber" autocomplete="off">
                <ValidationProvider
                    rules="required|account-number"
                    v-slot="{ errors }"
                >
                    <klump-checkout-input
                        v-model="payload.account_number"
                        :customClass="'rounded mb-6'"
                        :inputProp="{
                            type: 'tel',
                            ref: 'account_number',
                        }"
                        :errorMessages="errors"
                    >
                        Account Number
                    </klump-checkout-input>
                </ValidationProvider>
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center w-10/12">
                        <p class="text-xs text-primary-grey my-5">
                            This site is protected by reCAPTCHA Enterprise and
                            the Google
                            <router-link to="#" class="text-black underline"
                                >Privacy Policy</router-link
                            >
                            and
                            <router-link to="#" class="text-black underline"
                                >Terms of Service</router-link
                            >
                            apply.
                        </p>
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
                <span>
                    <klump-checkout-button :disabled="invalid"
                        >Continue
                    </klump-checkout-button>
                </span>
            </form>
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'WhatsYourAccountNumber',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    computed: {
        ...mapGetters(['getAccountNumber']),
    },
    watch: {
        getAccountNumber(account_number) {
            if (account_number !== '') {
                this.$emit('gotoNextModal', {
                    next: 'connectYourBankModal',
                });
            }
        },
    },
    methods: {
        submitAccountNumber() {
            this.$store.commit('setAccountNumber', this.payload.account_number);
        },
    },
};
</script>
