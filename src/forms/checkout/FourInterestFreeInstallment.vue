<template>
    <klump-checkout-container>
        <template v-slot:header>
            4 installment charged on your card over 3 months
        </template>
        <div class="responsive-height my-5 container">
            <ul class="font-bold flex flex-col space-y-10 relative">
                <div class="flex justify-between">
                    <div class="relative">
                        <li class="bullet">
                            <div class="inline-flex flex-col xl:space-y-2">
                                <p
                                    class="
                                        inline
                                        text-base
                                        xl:text-lg
                                        leading-25
                                        font-extrabold
                                        text-tertiary
                                    "
                                >
                                    Due Now
                                </p>
                                <p
                                    class="
                                        text-sm
                                        xl:text-base
                                        leading-22
                                        text-primary-grey
                                    "
                                >
                                    Paid at purchase
                                </p>
                            </div>
                        </li>
                        <div class="vertical"></div>
                    </div>
                    <p
                        class="
                            text-base
                            xl:text-lg
                            leading-25
                            font-extrabold
                            text-tertiary
                        "
                    >
                        NGN161,807.5
                    </p>
                </div>
                <div class="flex justify-between">
                    <div class="relative">
                        <li class="bullet-grey">
                            <div class="inline-flex flex-col xl:space-y-2">
                                <p
                                    class="
                                        inline
                                        text-base
                                        xl:text-lg
                                        leading-25
                                        font-extrabold
                                        text-primary
                                    "
                                >
                                    Due: Aug 5, 2021
                                </p>
                                <p
                                    class="
                                        text-sm
                                        xl:text-base
                                        leading-22
                                        text-primary-grey
                                    "
                                >
                                    Paid automatically<br class="xl:hidden" />
                                    1 month later
                                </p>
                            </div>
                        </li>
                        <div class="vertical"></div>
                    </div>
                    <p
                        class="
                            text-base
                            xl:text-lg
                            leading-25
                            font-extrabold
                            text-primary
                        "
                    >
                        NGN161,807.5
                    </p>
                </div>
                <div class="flex justify-between">
                    <div class="relative">
                        <li class="bullet-grey">
                            <div class="inline-flex flex-col xl:space-y-2">
                                <p
                                    class="
                                        inline
                                        text-base
                                        xl:text-lg
                                        leading-25
                                        font-extrabold
                                        text-primary
                                    "
                                >
                                    Due: Sept 5, 2021
                                </p>
                                <p
                                    class="
                                        text-sm
                                        xl:text-base
                                        leading-22
                                        text-primary-grey
                                    "
                                >
                                    Paid automatically<br class="xl:hidden" />
                                    2 months later
                                </p>
                            </div>
                        </li>
                        <div class="vertical"></div>
                    </div>
                    <p
                        class="
                            text-base
                            xl:text-lg
                            leading-25
                            font-extrabold
                            text-primary
                        "
                    >
                        NGN161,807.5
                    </p>
                </div>
                <div class="flex justify-between">
                    <div class="relative">
                        <li class="bullet-grey">
                            <div class="inline-flex flex-col xl:space-y-2">
                                <p
                                    class="
                                        inline
                                        text-base
                                        xl:text-lg
                                        leading-25
                                        font-extrabold
                                        text-primary
                                    "
                                >
                                    Due: Oct 5, 2021
                                </p>
                                <p
                                    class="
                                        text-sm
                                        xl:text-base
                                        leading-22
                                        text-primary-grey
                                    "
                                >
                                    Final payment,<br class="xl:hidden" />
                                    3 months later
                                </p>
                            </div>
                        </li>
                    </div>
                    <p
                        class="
                            text-base
                            xl:text-lg
                            leading-25
                            font-extrabold
                            text-primary
                        "
                    >
                        NGN161,807.5
                    </p>
                </div>
            </ul>
        </div>
        <p class="text-secondary leading-30 text-base font-medium">
            Get your goods fast at just one fourth of the payment upfront. The
            remaining sum is parted into three interest free installments.
        </p>
        <p class="text-xs text-primary-grey my-5">
            By tapping continue I agree to the Klump
            <router-link to="" class="text-secondary underline font-bold"
                >Customer Agreement</router-link
            >
            and
            <router-link to="" class="text-secondary underline font-bold"
                >Privacy Policy</router-link
            >
        </p>
        <span @click="gotoNextModal(false, {}, 'successfulTransactionModal')">
            <klump-checkout-button> Continue </klump-checkout-button>
        </span>
    </klump-checkout-container>
</template>

<script>
import KlumpCheckoutContainer from '@/components/KlumpCheckoutContainer';
import KlumpCheckoutButton from '@/components/KlumpCheckoutButton';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    name: 'FourInterestFreeInstallment',
    mixins: [gotoNextModalMixin],
    components: {
        KlumpCheckoutContainer,
        KlumpCheckoutButton,
    },
};
</script>
<style>
.bullet::before {
    display: inline-block;
    content: ' ';
    background-image: url('../../assets/icons/bullet-tertiary.svg');
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
    margin-right: 8px;
}
.bullet-grey::before {
    display: inline-block;
    content: ' ';
    background-image: url('../../assets/icons/bullet-grey.svg');
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
    margin-right: 8px;
}
.vertical {
    border-left: 2.5px solid #e6e6e6;
    height: 99px;
    position: absolute;
    left: 5px;
    top: 18px;
}
#merchant-collab {
    display: none;
}

@media (min-width: 1280px) {
    .bullet::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-tertiary.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 15px;
    }
    .bullet-grey::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-grey.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 15px;
    }
    .vertical {
        border-left: 2.5px solid #e6e6e6;
        height: 88px;
        position: absolute;
        left: 5px;
        top: 20px;
    }
}

@media (min-height: 400px) and (min-width: 1366px) {
    .responsive-height {
        height: 140px;
        overflow-y: auto;
    }
    .bullet::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-tertiary.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 5px;
    }
    .bullet-grey::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-grey.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 5px;
    }
}
@media (min-height: 700px) and (min-width: 1366px) {
    .responsive-height {
        height: auto;
    }
    .bullet::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-tertiary.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 15px;
    }
    .bullet-grey::before {
        display: inline-block;
        content: ' ';
        background-image: url('../../assets/icons/bullet-grey.svg');
        background-size: 12px 12px;
        height: 12px;
        width: 12px;
        margin-right: 15px;
    }
}
</style>
