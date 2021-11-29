<template>
    <klump-checkout-container>
        <template v-slot:header> Document Verification </template>
        <p class="mb-6 leading-30">
            We need an ID to verify your identity and clear you for
            installments.
        </p>
        <div class="flex flex-col space-y-3">
            <div class="border-xxs border-input rounded-5 p-3">
                <div class="flex items-center space-x-4">
                    <img
                        src="../../assets/images/passport.png"
                        height="30"
                        width="47.56"
                    />
                    <p class="text-document text-base leading-18">Passport</p>
                </div>
            </div>
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
        </div>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer.vue';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'ChoosePassport',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
    },
};
</script>
