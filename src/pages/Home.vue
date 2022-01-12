<template>
    <div>
        <Alert v-if="getAlert != null" :alert="getAlert" />
        <four-easy-payments
            v-show="showFourEasyPaymentsModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <verify-your-details
            v-show="showVerifyYourDetailsModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <enter-the-code
            v-show="showEnterTheCodeModal"
            @gotoNextModal="handleGotoNextModal"
            @goToVerifyYourDetails="handleGoToVerifyYourDetails"
            :key="reRender"
        />
        <whats-your-email
            v-show="showWhatsYourEmailModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <choose-a-password
            v-show="showChooseAPasswordModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <complete-your-account
            v-show="showCompleteYourAccountModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <choose-identification
            v-show="showChooseIdentificationModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <passport-verification
            v-show="showPassportVerificationModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <whats-your-bvn
            v-show="showWhatsYourBvnModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <whats-your-account-number
            v-show="showWhatsYourAccountNumberModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <mono v-show="showMonoModal" @gotoNextModal="handleGotoNextModal" />
        <hang-on
            v-show="showHangOnModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <connect-your-bank
            v-show="showConnectYourBankModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <complete-checkout
            v-show="showCompleteCheckoutModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <four-interest-free-installment
            v-show="showFourInterestFreeInstallmentModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <successful-transaction
            v-show="showSuccessfulTransactionModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <sign-in
            v-show="showSignInModal"
            @gotoNextModal="handleGotoNextModal"
        />
        <pay v-show="showPayModal" @gotoNextModal="handleGotoNextModal" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FourEasyPayments from '@/forms/onboarding/FourEasyPayments';
import VerifyYourDetails from '@/forms/onboarding/VerifyYourDetails';
import EnterTheCode from '@/forms/onboarding/EnterTheCode';
import WhatsYourEmail from '@/forms/onboarding/WhatsYourEmail';
import ChooseAPassword from '@/forms/onboarding/ChooseAPassword';
import CompleteYourAccount from '@/forms/onboarding/CompleteYourAccount';
import ChooseIdentification from '@/forms/onboarding/ChooseIdentification';
import PassportVerification from '@/forms/onboarding/PassportVerification';
import WhatsYourBvn from '@/forms/onboarding/WhatsYourBvn';
import ConnectYourBank from '@/forms/profiling/ConnectYourBank';
import CompleteCheckout from '@/forms/profiling/CompleteCheckout';
import FourInterestFreeInstallment from '@/forms/checkout/FourInterestFreeInstallment';
import SuccessfulTransaction from '@/forms/returning_user/SuccessfulTransaction';
import WhatsYourAccountNumber from '@/forms/onboarding/WhatsYourAccountNumber';
import Mono from '@/forms/onboarding/Mono';
import HangOn from '@/forms/onboarding/HangOn';
import SignIn from '@/forms/returning_user/SignIn';
import Pay from '@/forms/returning_user/Pay';
import Alert from '@/components/Alerts/Alert';

export default {
    name: 'Home',
    components: {
        FourEasyPayments,
        VerifyYourDetails,
        EnterTheCode,
        WhatsYourEmail,
        ChooseAPassword,
        CompleteYourAccount,
        ChooseIdentification,
        PassportVerification,
        WhatsYourBvn,
        WhatsYourAccountNumber,
        HangOn,
        Mono,
        ConnectYourBank,
        CompleteCheckout,
        FourInterestFreeInstallment,
        SuccessfulTransaction,
        SignIn,
        Pay,
        Alert,
    },
    data() {
        return {
            showFourEasyPaymentsModal: true,
            showVerifyYourDetailsModal: false,
            showEnterTheCodeModal: false,
            showWhatsYourEmailModal: false,
            showChooseAPasswordModal: false,
            showCompleteYourAccountModal: false,
            showWhatsYourBvnModal: false,
            showWhatsYourAccountNumberModal: false,
            showMonoModal: false,
            showHangOnModal: false,
            showConnectYourBankModal: false,
            showCompleteCheckoutModal: false,
            showChooseIdentificationModal: false,
            showPassportVerificationModal: false,
            showFourInterestFreeInstallmentModal: false,
            showSuccessfulTransactionModal: false,
            showSignInModal: false,
            showPayModal: false,
            reRender: 0,
            payload: {},
        };
    },
    computed: {
        ...mapGetters(['getAlert']),
    },
    methods: {
        handleGotoNextModal(param) {
            switch (param.next) {
                case 'verifyYourDetailsModal':
                    this.showFourEasyPaymentsModal = false;
                    this.showVerifyYourDetailsModal = true;
                    break;
                case 'signInModal':
                    this.showFourEasyPaymentsModal = false;
                    this.showSignInModal = true;
                    break;
                case 'signUpModal':
                    this.showSignInModal = false;
                    this.showFourEasyPaymentsModal = true;
                    break;
                case 'payModal':
                    this.showSignInModal = false;
                    this.showPayModal = true;
                    break;
                case 'enterTheCodeModal':
                    this.payload = param.payload;
                    this.showVerifyYourDetailsModal = false;
                    this.showEnterTheCodeModal = true;
                    break;
                case 'whatsYourEmailModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showEnterTheCodeModal = false;
                    this.showWhatsYourEmailModal = true;
                    break;
                case 'chooseAPasswordModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showWhatsYourEmailModal = false;
                    this.showChooseAPasswordModal = true;
                    break;
                case 'completeYourAccountModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showChooseAPasswordModal = false;
                    this.showCompleteYourAccountModal = true;
                    break;
                case 'chooseIdentificationModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showCompleteYourAccountModal = false;
                    this.showChooseIdentificationModal = true;
                    break;
                case 'passportVerificationModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showChooseIdentificationModal = false;
                    this.showPassportVerificationModal = true;
                    break;
                case 'whatsYourBvnModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showPassportVerificationModal = false;
                    this.showWhatsYourBvnModal = true;
                    break;
                case 'whatsYourAccountNumberModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showWhatsYourBvnModal = false;
                    this.showWhatsYourAccountNumberModal = true;
                    break;
                case 'connectYourBankModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showWhatsYourAccountNumberModal = false;
                    this.showConnectYourBankModal = true;
                    break;
                case 'monoModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showConnectYourBankModal = false;
                    this.showMonoModal = true;
                    break;
                case 'hangOnModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showMonoModal = false;
                    this.showHangOnModal = true;
                    break;
                case 'completeCheckoutModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showHangOnModal = false;
                    this.showCompleteCheckoutModal = true;
                    break;
                case 'completeCheckout':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showCompleteCheckoutModal = false;
                    break;
                case 'successfulTransactionModal':
                    this.payload = { ...param.payload, ...this.payload };
                    this.showFourInterestFreeInstallmentModal = false;
                    this.showSuccessfulTransactionModal = true;
                    break;
                default:
                    this.showFourEasyPaymentsModal = true;
            }
        },
        handleGoToVerifyYourDetails() {
            this.reRender++;
            this.showEnterTheCodeModal = false;
            this.showVerifyYourDetailsModal = true;
            this.$store.commit('setOtpStatus', false);
        },
    },
};
</script>
