<template>
    <klump-checkout-container>
        <div class="flex justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="101"
                viewBox="0 0 100 101"
                fill="none"
            >
                <circle cx="50" cy="50.6162" r="50" fill="#D8FFD9" />
                <circle cx="49.9993" cy="50.6165" r="46.7742" fill="#A8FBAB" />
                <circle cx="50.001" cy="50.6163" r="43.5484" fill="#4CAF50" />
                <path
                    d="M72.0044 37.2673C73.5807 38.8436 73.5807 41.3916 72.0044 42.9686L45.7944 69.1778C45.0081 69.9642 43.9759 70.3599 42.9437 70.3599C41.9116 70.3599 40.8794 69.9642 40.0931 69.1778L26.9885 56.0732C25.4114 54.4969 25.4114 51.9482 26.9885 50.3719C28.5648 48.7948 31.1128 48.7948 32.6898 50.3719L42.9437 60.6258L66.303 37.2673C67.8793 35.6902 70.4273 35.6902 72.0044 37.2673Z"
                    fill="#FAFAFA"
                />
            </svg>
        </div>
        <p class="leading-30 text-center mt-4 mb-2">
            You have been qualified for a spending limit of
        </p>
        <h1 class="hero-text bolded text-center text-2xl mb-7 text-primary">
            NGN 910,365.57
        </h1>
        <klump-checkout-button>Complete checkout</klump-checkout-button>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';

export default {
    name: 'CompleteCheckout',
    components: {
        KlumpCheckoutButton,
        KlumpCheckoutContainer,
    },
};
</script>
