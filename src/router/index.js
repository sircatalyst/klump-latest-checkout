import Vue from 'vue';
import VueRouter from 'vue-router';
const FourEasyPayments = () =>
    import(
        /* webpackChunkName: 'FourEasyPayments' */ '../forms/FourEasyPayments'
    );
const VerifyYourDetails = () =>
    import(
        /* webpackChunkName: 'VerifyYourDetails' */ '../forms/VerifyYourDetails'
    );
const EnterTheCode = () =>
    import(/* webpackChunkName: 'EnterTheCode' */ '../forms/EnterTheCode');
const WhatsYourEmail = () =>
    import(/* webpackChunkName: 'WhatsYourEmail' */ '../forms/WhatsYourEmail');
const ChooseAPassword = () =>
    import(
        /* webpackChunkName: 'ChooseAPassword' */ '../forms/ChooseAPassword'
    );
const WhatsYourBvn = () =>
    import(/* webpackChunkName: 'WhatsYourBvn' */ '../forms/WhatsYourBvn');
const CompleteYourAccount = () =>
    import(
        /* webpackChunkName: 'CompleteYourAccount' */ '../forms/CompleteYourAccount'
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
