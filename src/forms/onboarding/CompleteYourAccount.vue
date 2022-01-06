<template>
    <klump-checkout-container>
        <template v-slot:header> Complete your account</template>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="submitUserBio" autocomplete="off">
                <div class="responsive-height container">
                    <p class="mb-6 leading-30">
                        Please share your
                        <strong>billing details.</strong> We’ll only ask you for
                        this information once and you can easily update it in
                        the Klump app later.
                    </p>
                    <div class="flex items-center justify-between mb-3">
                        <div class="w-sm">
                            <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                tag="div"
                            >
                                <klump-checkout-input
                                    v-model="payload.firstname"
                                    :customClass="'rounded'"
                                    :inputProp="{
                                        type: 'text',
                                        ref: 'firstname',
                                    }"
                                    :errorMessages="errors"
                                >
                                    First Name
                                </klump-checkout-input>
                            </ValidationProvider>
                        </div>
                        <div class="w-sm">
                            <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                tag="div"
                            >
                                <klump-checkout-input
                                    v-model="payload.lastname"
                                    :customClass="'rounded'"
                                    :inputProp="{
                                        type: 'text',
                                        ref: 'lastname',
                                    }"
                                    :errorMessages="errors"
                                >
                                    Last Name
                                </klump-checkout-input>
                            </ValidationProvider>
                        </div>
                    </div>
                    <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                    >
                        <klump-checkout-input
                            v-model="payload.date_of_birth"
                            :customClass="'rounded'"
                            :inputProp="{
                                type: 'date',
                                ref: 'dob',
                            }"
                            :errorMessages="errors"
                        >
                        </klump-checkout-input>
                    </ValidationProvider>
                    <div class="my-3">
                        <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            tag="div"
                        >
                            <klump-checkout-input
                                v-model="payload.address"
                                :customClass="'rounded mb-3'"
                                :inputProp="{
                                    type: 'text',
                                    ref: 'address',
                                }"
                                :errorMessages="errors"
                            >
                                Address
                            </klump-checkout-input>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" tag="div">
                            <klump-checkout-input
                                v-model="payload.apartment"
                                :customClass="'rounded mb-3'"
                                :inputProp="{
                                    type: 'text',
                                    ref: 'apartment',
                                }"
                                :errorMessages="errors"
                            >
                                Apartment, suite, etc. (optional)
                            </klump-checkout-input>
                        </ValidationProvider>
                        <div class="flex items-center justify-between mb-3">
                            <div class="w-sm">
                                <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                    tag="div"
                                >
                                    <klump-checkout-input
                                        v-model="payload.city"
                                        :customClass="'rounded'"
                                        :inputProp="{
                                            type: 'text',
                                            ref: 'city',
                                        }"
                                        :errorMessages="errors"
                                    >
                                        City
                                    </klump-checkout-input>
                                </ValidationProvider>
                            </div>
                            <div class="w-sm">
                                <ValidationProvider
                                    rules="required"
                                    v-slot="{ errors }"
                                    tag="div"
                                >
                                    <klump-checkout-input
                                        v-model="payload.state"
                                        :customClass="'rounded'"
                                        :inputProp="{
                                            type: 'text',
                                            ref: 'state',
                                        }"
                                        :errorMessages="errors"
                                    >
                                        State
                                    </klump-checkout-input>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <ValidationProvider rules="required|terms-checked" tag="div">
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
    </klump-checkout-container>
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
    name: 'CompleteYourAccount',
    mixins: [gotoNextModalMixin],
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    computed: {
        ...mapGetters(['getUserBio', 'getPhone', 'getEmail', 'getPassword']),
    },
    watch: {
        getUserBio(data) {
            if (data !== null) {
                this.gotoNextModal(false, {}, 'chooseIdentificationModal');
            }
        },
    },
    methods: {
        ...mapActions(['createUser']),
        submitUserBio() {
            let payload = this.payload;
            delete payload.dialCode;
            delete payload.passport;
            delete payload.otp;
            delete payload.active;
            delete payload.tel;
            delete payload.bvn;
            delete payload.terms;
            if (payload.apartment === '') {
                delete payload.apartment;
            }

            payload.phone = this.getPhone;
            payload.email = this.getEmail;
            payload.password = this.getPassword;

            this.createUser(payload);
        },
    },
};
</script>
<style scoped>
@media (min-height: 400px) and (min-width: 1366px) {
    .responsive-height {
        height: 279px;
        overflow-y: auto;
    }
}
@media (min-height: 700px) and (min-width: 1366px) {
    .responsive-height {
        height: auto;
    }
}
</style>
