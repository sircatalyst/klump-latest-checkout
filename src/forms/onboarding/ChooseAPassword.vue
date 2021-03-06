<template>
    <klump-checkout-container>
        <template v-slot:header> Choose a password </template>
        <p class="mb-6 leading-30">
            Your password should contain at least a number, a special character
            <strong>(.!@#%^&amp;),</strong> an uppercase and lowercase and must
            be at least 7 characters long.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="submitPassword" autocomplete="off">
                <ValidationProvider
                    rules="password-valid|required"
                    v-slot="{ errors }"
                >
                    <klump-checkout-input
                        v-model="payload.password"
                        :customClass="'rounded mb-6'"
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
    name: 'ChooseAPassword',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    computed: {
        ...mapGetters(['getPassword']),
    },
    watch: {
        getPassword(data) {
            if (data !== null) {
                this.gotoNextModal(false, {}, 'completeYourAccountModal');
            }
        },
    },
    methods: {
        submitPassword() {
            this.$store.commit('setPassword', this.payload.password);
        },
    },
};
</script>
