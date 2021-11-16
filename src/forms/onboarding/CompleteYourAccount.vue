<template>
    <klump-checkout-container>
        <template v-slot:header> Complete your account</template>
        <ValidationObserver v-slot="{ invalid }" tag="form">
            <div class="responsive-height container">
                <p class="mb-6 leading-30">
                    Please share your <strong>billing details.</strong> We’ll
                    only ask you for this information once and you can easily
                    update it in the Klump app later.
                </p>
                <div class="flex items-center justify-between mb-3">
                    <div class="w-sm">
                        <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                            tag="div"
                        >
                            <klump-checkout-input
                                v-model="firstname"
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
                                v-model="lastname"
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
                        v-model="dob"
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
                            v-model="address"
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
                    <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                    >
                        <klump-checkout-input
                            v-model="apartment"
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
                                    v-model="city"
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
                                    v-model="state"
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
                    <ValidationProvider
                        rules="required"
                        v-slot="{ errors }"
                        tag="div"
                    >
                        <klump-checkout-input
                            v-model="zipcode"
                            :customClass="'rounded'"
                            :inputProp="{
                                type: 'text',
                                ref: 'zipcode',
                            }"
                            :errorMessages="errors"
                        >
                            Zip code
                        </klump-checkout-input>
                    </ValidationProvider>
                </div>
            </div>
            <ValidationProvider rules="required|terms-checked" tag="div">
                <div class="flex my-5">
                    <input type="checkbox" v-model="terms" name="" id="" />
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
            <klump-checkout-button :disabled="invalid"
                >Continue</klump-checkout-button
            >
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutInput from '@/components/KlumpCheckoutInput';

export default {
    name: 'CompleteYourAccount',
    components: {
        ValidationObserver,
        ValidationProvider,
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
        KlumpCheckoutInput,
    },
    data() {
        return {
            firstname: '',
            lastname: '',
            dob: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            zipcode: '',
            terms: false,
        };
    },
};
</script>
<style scoped>
input[type='checkbox'] {
    height: 20px;
    width: 20px;
}
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
