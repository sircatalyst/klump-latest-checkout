<template>
    <klump-checkout-container>
        <template v-slot:header> Document Verification </template>
        <p class="mb-6 leading-30">
            Avoid glare, shaking and blur images, we can’t verify your account
            with those
        </p>
        <ValidationObserver v-slot="{ invalid }">
            <ValidationProvider
                rules="required|image"
                ref="provider"
                v-slot="{ errors }"
            >
                <div class="text-base text-red-600" v-if="errors.length > 0">
                    <p>{{ errors[0] }}</p>
                </div>
                <input type="text" v-model="file" name="Passport" hidden />
                <div v-if="payload.passport" id="uploaded-img" class="mb-10">
                    <img
                        :src="imgUrl"
                        class="object-contain"
                        style="width: 420px; height: 251px"
                        alt=""
                    />
                    <div class="relative flex justify-center">
                        <button
                            class="
                                absolute
                                bottom-6
                                bg-dark-shade
                                rounded-full
                                py-2
                                px-6
                                inline-flex
                                items-center
                                space-x-3
                            "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M3.1167 2.18971C4.7498 0.774602 6.83909 -0.00300588 9 8.73238e-06C13.9707 8.73238e-06 18 4.0293 18 9C18 10.9224 17.397 12.7044 16.371 14.166L13.5 9H16.2C16.2001 7.58846 15.7853 6.20803 15.0072 5.03033C14.2291 3.85264 13.1219 2.92965 11.8235 2.37612C10.525 1.82259 9.09244 1.66294 7.70396 1.91702C6.31548 2.17111 5.03231 2.82772 4.014 3.80521L3.1167 2.18971ZM14.8833 15.8103C13.2502 17.2254 11.1609 18.003 9 18C4.0293 18 0 13.9707 0 9C0 7.0776 0.603 5.2956 1.629 3.83401L4.5 9H1.8C1.79988 10.4115 2.21468 11.792 2.9928 12.9697C3.77093 14.1474 4.87806 15.0704 6.17654 15.6239C7.47502 16.1774 8.90756 16.3371 10.296 16.083C11.6845 15.8289 12.9677 15.1723 13.986 14.1948L14.8833 15.8103Z"
                                    fill="white"
                                />
                            </svg>
                            <span class="text-white leading-15 text-sm"
                                >Reupload Photo</span
                            >
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            ref="passport"
                            @change="uploadPassport"
                            class="
                                absolute
                                bottom-6
                                w-sm
                                h-9
                                opacity-0
                                rounded-full
                            "
                            id="id"
                        />
                    </div>
                </div>
                <div
                    v-else
                    class="
                        mb-10
                        border border-dashed border-primary
                        rounded-10
                        flex
                        justify-center
                        bg-doc-bg
                    "
                >
                    <div class="flex flex-col space-y-4 my-16">
                        <div class="flex items-center space-x-4">
                            <img
                                v-if="getDocType === 'nin'"
                                src="../../assets/images/nin.png"
                                height="30"
                                width="47.56"
                            />
                            <img
                                v-if="getDocType === 'international_passport'"
                                src="../../assets/images/passport.png"
                                height="30"
                                width="47.56"
                            />
                            <img
                                v-if="getDocType === 'driver_license'"
                                src="../../assets/images/drivers_license.png"
                                height="30"
                                width="47.56"
                            />
                            <p
                                class="
                                    text-base text-primary
                                    doc-upload
                                    leading-18
                                "
                            >
                                Front of Passport
                            </p>
                        </div>
                        <div class="text-center">
                            <div class="relative">
                                <button
                                    class="
                                        bg-primary
                                        rounded-3
                                        py-4
                                        px-6
                                        inline-flex
                                        items-center
                                        space-x-3
                                    "
                                >
                                    <svg
                                        class="inline"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="14"
                                        viewBox="0 0 16 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M1.55556 12.4444H14V7H15.5556V13.2222C15.5556 13.4285 15.4736 13.6263 15.3278 13.7722C15.1819 13.9181 14.9841 14 14.7778 14H0.777778C0.571498 14 0.373667 13.9181 0.227806 13.7722C0.0819442 13.6263 0 13.4285 0 13.2222V7H1.55556V12.4444ZM8.55556 4.66667V10.1111H7V4.66667H3.11111L7.77778 0L12.4444 4.66667H8.55556Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span class="text-white leading-15 text-sm"
                                        >Upload Image</span
                                    >
                                </button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref="passport"
                                    @change="uploadPassport"
                                    class="
                                        absolute
                                        w-10/12
                                        top-0
                                        opacity-0
                                        py-2
                                        left-4
                                    "
                                    id=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <span @click="submitKyc">
                    <klump-checkout-button :disabled="invalid"
                        >Continue</klump-checkout-button
                    >
                </span>
            </ValidationProvider>
        </ValidationObserver>
    </klump-checkout-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../../validations.js';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton.vue';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer.vue';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'PassportVerification',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            imgUrl: '',
            file: null,
        };
    },
    computed: {
        ...mapGetters(['getDocType', 'getDoc', 'getUserBio']),
    },
    watch: {
        getDoc(file) {
            if (file !== '') {
                this.gotoNextModal(false, {}, 'whatsYourBvnModal');
            }
        },
    },
    methods: {
        ...mapActions(['verifyUserId']),
        async uploadPassport(event) {
            const { valid } = await this.$refs.provider.validate(event);
            if (valid) {
                const img = this.$refs.passport.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imgUrl = e.target.result;
                    this.payload.passport = this.imgUrl;
                    this.file = img;
                };
                reader.readAsDataURL(img);
            }
            return true;
        },
        submitKyc() {
            /**
             * validate KYC Document here
             */
            let payload = {};
            payload.type = this.getDocType;
            payload.firstname = this.getUserBio.firstname;
            payload.lastname = this.getUserBio.lastname;
            payload.email = this.getUserBio.email;
            payload.phone = this.getUserBio.phone;
            payload.date_of_birth = this.getUserBio.date_of_birth;
            payload.file = this.payload.passport;

            this.verifyUserId(payload);
        },
    },
};
</script>
