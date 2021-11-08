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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
