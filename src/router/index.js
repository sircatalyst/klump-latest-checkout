import Vue from 'vue';
import VueRouter from 'vue-router';
const FourEasyPayments = () =>
    import(
        /* webpackChunkName: 'FourEasyPayments' */ '../forms/onboarding/FourEasyPayments'
    );
const VerifyYourDetails = () =>
    import(
        /* webpackChunkName: 'VerifyYourDetails' */ '../forms/onboarding/VerifyYourDetails'
    );
const EnterTheCode = () =>
    import(
        /* webpackChunkName: 'EnterTheCode' */ '../forms/onboarding/EnterTheCode'
    );
const WhatsYourEmail = () =>
    import(
        /* webpackChunkName: 'WhatsYourEmail' */ '../forms/onboarding/WhatsYourEmail'
    );
const ChooseAPassword = () =>
    import(
        /* webpackChunkName: 'ChooseAPassword' */ '../forms/onboarding/ChooseAPassword'
    );
const WhatsYourBvn = () =>
    import(
        /* webpackChunkName: 'WhatsYourBvn' */ '../forms/onboarding/WhatsYourBvn'
    );
const CompleteYourAccount = () =>
    import(
        /* webpackChunkName: 'CompleteYourAccount' */ '../forms/onboarding/CompleteYourAccount'
    );
const ConnectYourBank = () =>
    import(
        /* webpackChunkName: 'ConnectYourBank' */ '../forms/profiling/ConnectYourBank'
    );
const CompleteCheckout = () =>
    import(
        /* webpackChunkName: 'CompleteCheckout' */ '../forms/profiling/CompleteCheckout'
    );
const SignIn = () =>
    import(/* webpackChunkName: 'SignIn' */ '../forms/returning_user/SignIn');
const FourInterestFreeInstallment = () =>
    import(
        /* webpackChunkName: 'FourInterestFreeInstallment' */ '../forms/checkout/FourInterestFreeInstallment'
    );

Vue.use(VueRouter);

const routes = [
    {
        path: '/pay-in-4-easy-payments',
        name: 'foureasypayments',
        component: FourEasyPayments,
    },
    {
        path: '/verify-your-details',
        name: 'verifyyourdetails',
        component: VerifyYourDetails,
    },
    {
        path: '/enter-the-code',
        name: 'enterthecode',
        component: EnterTheCode,
    },
    {
        path: '/whats-your-email',
        name: 'whatsyouremail',
        component: WhatsYourEmail,
    },
    {
        path: '/choose-a-password',
        name: 'chooseapassword',
        component: ChooseAPassword,
    },
    {
        path: '/whats-your-bvn',
        name: 'whatsyourbvn',
        component: WhatsYourBvn,
    },
    {
        path: '/complete-your-account',
        name: 'completeyouraccount',
        component: CompleteYourAccount,
    },
    {
        path: '/connect-your-bank',
        name: 'connectyourbank',
        component: ConnectYourBank,
    },
    {
        path: '/complete-checkout',
        name: 'completecheckout',
        component: CompleteCheckout,
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn,
    },
    {
        path: '/4-insterest-free-installment',
        name: '4interestfreeinstallment',
        component: FourInterestFreeInstallment,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
