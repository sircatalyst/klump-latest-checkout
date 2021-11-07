<template>
    <klump-checkout-container>
        <section class="text-base">
            <h1 class="hero-text bolded text-2xl my-6 text-primary">
                Pay in 4 easy payments
            </h1>
            <ul class="font-bold flex flex-col space-y-10 mb-12 relative">
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
            <button
                class="
                    bg-primary
                    py-4
                    font-bold
                    w-full
                    text-white
                    tracking-wider
                "
            >
                Continue
            </button>
        </section>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';

export default {
    name: 'FourEasyPayments',
    components: {
        KlumpCheckoutContainer,
    },
};
</script>
<style scoped>
.bullet::before {
    display: inline-block;
    content: ' ';
    background-image: url('../assets/images/bullet.svg');
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
