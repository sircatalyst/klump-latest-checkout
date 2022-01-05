<template>
    <div>
        <klump-checkout-container>
            <template v-slot:header> Sign in </template>
            <p class="mb-6 leading-30">
                Please enter your Klump email and password to check out
            </p>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="signInUser" autocomplete="off">
                    <ValidationProvider
                        rules="email|required"
                        v-slot="{ errors }"
                    >
                        <klump-checkout-input
                            v-model="payload.email"
                            :customClass="'rounded-tl-md rounded-tr-md'"
                            :inputProp="{
                                type: 'email',
                                ref: 'email',
                            }"
                            :errorMessages="errors"
                        >
                            Email
                        </klump-checkout-input>
                    </ValidationProvider>
                    <ValidationProvider
                        rules="password-valid|required"
                        v-slot="{ errors }"
                    >
                        <klump-checkout-input
                            v-model="payload.password"
                            :customClass="'rounded-bl-md rounded-br-md'"
                            :inputProp="{
                                type: 'password',
                                ref: 'password',
                            }"
                            :errorMessages="errors"
                        >
                            Password
                        </klump-checkout-input>
                    </ValidationProvider>
                    <ValidationProvider
                        rules="required|terms-checked"
                        tag="div"
                    >
                        <div class="flex my-5">
                            <input
                                type="checkbox"
                                v-model="payload.terms"
                                name=""
                                id=""
                            />
                            <span class="inline-block ml-3 text-xs leading-5"
                                >I agree to the
                                <router-link to="" class="font-bold underline"
                                    >Klump Shopping Service</router-link
                                >
                                (incl. electronic communications) and
                                <router-link to="" class="font-bold underline"
                                    >Privacy Policy</router-link
                                ></span
                            >
                        </div>
                    </ValidationProvider>
                    <span>
                        <klump-checkout-button :disabled="invalid"
                            >Continue</klump-checkout-button
                        >
                    </span>
                </form>
            </ValidationObserver>
            <p class="text-lg leading-25 text-secondary text-center mt-6">
                Don't have an account?
                <router-link to="#" class="text-light-blue cursor-pointer"
                    >Sign up</router-link
                >
            </p>
        </klump-checkout-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'SignIn',
    mixins: [gotoNextModalMixin],
    computed: {
        ...mapGetters(['isLoggedIn']),
    },
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    data() {
        return {
            payload: {
                terms: false,
                password: '',
                email: '',
                type: 'email_password',
                persona: 'user',
            },
        };
    },
    watch: {
        isLoggedIn(bool) {
            if (bool) {
                this.$emit('gotoNextModal', {
                    next: 'payModal',
                    payload: {},
                });
            }
        },
    },
    methods: {
        ...mapActions(['signIn']),
        signInUser() {
            this.signIn(this.payload);
        },
    },
};
</script>
