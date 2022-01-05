<template>
    <div>
        <Alert v-if="alert != null" @clearAlert="removeAlert" :alert="alert" />
        <klump-checkout-container>
            <template v-slot:header> Sign in </template>
            <p class="mb-6 leading-30">
                Please enter your Klump email and password to check out
            </p>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="authenticateUser" autocomplete="off">
                    <ValidationProvider
                        rules="email|required"
                        v-slot="{ errors }"
                    >
                        <klump-checkout-input
                            v-model="loginPayload.email"
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
                            v-model="loginPayload.password"
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
                                v-model="loginPayload.terms"
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
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput';
import gotoNextModalMixin from '../../mixins/gotoNextModal';
import authenticateUserMixin from '../../mixins/authenticateUser';
import Alert from '@/components/Alerts/Alert';

export default {
    name: 'SignIn',
    mixins: [gotoNextModalMixin, authenticateUserMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
        Alert,
    },
    methods: {
        removeAlert() {
            this.alert = null;
        },
    },
};
</script>
