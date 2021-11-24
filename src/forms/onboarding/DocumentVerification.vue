<template>
    <klump-checkout-container>
        <template v-slot:header> Document Verification </template>
        <p class="mb-6 leading-30">
            We need an ID to verify your identity and clear you for
            installments.
        </p>
        <div class="flex flex-col space-y-3 mb-8">
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
                        src="../../assets/images/nin_slip.png"
                        height="30"
                        width="47.56"
                    />
                    <p class="text-document text-base leading-18">
                        Nimc Enrollment Slip
                    </p>
                </div>
            </div>
            <div class="border-xxs border-input rounded-5 p-3">
                <div class="flex items-center space-x-4">
                    <img
                        src="../../assets/images/voters_card.png"
                        height="30"
                        width="47.56"
                    />
                    <p class="text-document text-base leading-18">
                        Voter’s Card
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
        <span>
            <klump-checkout-button>Continue</klump-checkout-button>
        </span>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton.vue';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer.vue';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'DocumentVerification',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
};
</script>
