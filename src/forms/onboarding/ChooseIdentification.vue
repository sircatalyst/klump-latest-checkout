<template>
    <klump-checkout-container>
        <template v-slot:header> Document Verification </template>
        <p class="mb-6 leading-30">
            We need an ID to verify your identity and clear you for
            installments.
        </p>
        <div class="flex flex-col space-y-3">
            <span
                class="cursor-pointer"
                @click="chooseDocType('international_passport')"
            >
                <div class="border-xxs border-input rounded-5 p-3">
                    <div class="flex items-center space-x-4">
                        <img
                            src="../../assets/images/passport.png"
                            height="30"
                            width="47.56"
                        />
                        <p class="text-document text-base leading-18">
                            Passport
                        </p>
                    </div>
                </div>
            </span>
            <span class="cursor-pointer" @click="chooseDocType('nin')">
                <div class="border-xxs border-input rounded-5 p-3">
                    <div class="flex items-center space-x-4">
                        <img
                            src="../../assets/images/nin.png"
                            height="30"
                            width="47.56"
                        />
                        <p class="text-document text-base leading-18">
                            National Identity Card
                        </p>
                    </div>
                </div>
            </span>
            <span
                class="cursor-pointer"
                @click="chooseDocType('driver_license')"
            >
                <div class="border-xxs border-input rounded-5 p-3">
                    <div class="flex items-center space-x-4">
                        <img
                            src="../../assets/images/drivers_license.png"
                            height="30"
                            width="47.56"
                        />
                        <p class="text-document text-base leading-18">
                            Driver’s License
                        </p>
                    </div>
                </div>
            </span>
        </div>
    </klump-checkout-container>
</template>

<script>
import { mapGetters } from 'vuex';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer.vue';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'ChooseIdentification',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
    },
    computed: {
        ...mapGetters(['getDocType']),
    },
    watch: {
        getDocType(type) {
            if (type !== '') {
                this.gotoNextModal(false, {}, 'passportVerificationModal');
            }
        },
    },
    methods: {
        chooseDocType(type) {
            this.$store.commit('setDocType', type);
        },
    },
};
</script>
