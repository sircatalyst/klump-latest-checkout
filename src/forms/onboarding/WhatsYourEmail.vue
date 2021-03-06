<template>
    <klump-checkout-container>
        <template v-slot:header> What's your email? </template>
        <p class="mb-6 leading-30">
            We'll use it to verify your account later.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="submitEmail" autocomplete="off">
                <ValidationProvider rules="email|required" v-slot="{ errors }">
                    <klump-checkout-input
                        v-model="payload.email"
                        :customClass="'rounded mb-6'"
                        :inputProp="{
                            type: 'email',
                            ref: 'email',
                        }"
                        :errorMessages="errors"
                    >
                        Email
                    </klump-checkout-input>
                </ValidationProvider>
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
                <span>
                    <klump-checkout-button :disabled="invalid"
                        >Continue</klump-checkout-button
                    >
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
    name: 'WhatsYourEmail',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    computed: {
        ...mapGetters(['getEmail']),
    },
    watch: {
        getEmail(data) {
            if (data !== null) {
                this.gotoNextModal(false, {}, 'chooseAPasswordModal');
            }
        },
    },
    methods: {
        submitEmail() {
            this.$store.commit('setEmail', this.payload.email);
        },
    },
};
</script>
