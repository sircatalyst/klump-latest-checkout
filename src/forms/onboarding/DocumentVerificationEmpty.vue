<template>
    <klump-checkout-container>
        <template v-slot:header> Document Verification </template>
        <p class="mb-6 leading-30">
            Avoid glare, shaking and blur images, we can’t verify your account
            with those
        </p>
        <div
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
                        src="../../assets/images/passport.png"
                        height="30"
                        width="47.56"
                    />
                    <p class="text-base text-primary doc-upload leading-18">
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
                            class="absolute w-10/12 top-0 opacity-0 py-2 left-4"
                            name=""
                            id=""
                        />
                    </div>
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
    name: 'DocumentVerificationEmpty',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
};
</script>
