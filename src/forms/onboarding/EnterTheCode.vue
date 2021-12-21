<template>
    <klump-checkout-container>
        <template v-slot:header> Enter the code </template>
        <p class="mb-6 leading-30">
            A code has been sent to <strong>+234 812 263 2296.</strong> You
            should get it within 20 seconds.
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <form
                @submit.prevent="
                    gotoNextModal(
                        invalid,
                        { otp: payload.otp },
                        'whatsYourEmailModal'
                    )
                "
                autocomplete="off"
            >
                <ValidationProvider rules="required" v-slot="{ errors }">
                    <klump-checkout-input
                        v-model="payload.otp"
                        :customClass="'rounded mb-6'"
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
                    <router-link :to="{ name: 'verifyyourdetails' }">
                        <span class="text-light-blue underline cursor-pointer"
                            >Change phone number</span
                        >
                    </router-link>
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
                        gotoNextModal(
                            invalid,
                            { otp: payload.otp },
                            'whatsYourEmailModal'
                        )
                    "
                >
                    <klump-checkout-button :disabled="invalid"
                        >Continue</klump-checkout-button
                    >
                </span>
            </form>
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton.vue';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer.vue';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput.vue';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'EnterTheCode',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
        KlumpCheckoutInput,
    },
};
</script>
