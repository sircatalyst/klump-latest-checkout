<template>
    <klump-checkout-container>
        <template v-slot:header> Pay in 4 easy payments </template>
        <ul class="font-bold flex flex-col space-y-10 mt-5 mb-12 relative">
            <div class="relative">
                <li class="bullet"><span>Continue with Klump</span></li>
                <div class="vertical"></div>
            </div>
            <div class="relative">
                <li class="bullet special-border">
                    <span>Review order with this merchant</span>
                </li>
                <div class="vertical"></div>
            </div>
            <li class="bullet"><span>Confirm purchase</span></li>
        </ul>
        <p class="text-xs text-primary-grey my-5">
            By pressing Continue you consent to Klump sharing billing
            information with this merchant
        </p>
        <span @click="gotoNextModal(false, {}, 'verifyYourDetailsModal')">
            <klump-checkout-button>Continue</klump-checkout-button>
        </span>
        <p class="text-lg leading-25 text-secondary text-center mt-6">
            Already have an account?
            <span
                @click="gotoNextModal(false, {}, 'signInModal')"
                class="text-light-blue cursor-pointer"
                >Sign in</span
            >
        </p>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'FourEasyPayments',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
};
</script>
<style scoped>
.bullet::before {
    display: inline-block;
    content: ' ';
    background-image: url('../../assets/icons/bullet.svg');
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
    margin-right: 15px;
}
.vertical {
    border-left: 2.5px solid #e6e6e6;
    height: 52px;
    position: absolute;
    left: 5px;
    top: 17px;
}
</style>
