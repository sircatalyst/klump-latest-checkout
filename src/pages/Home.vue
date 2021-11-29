<template>
	<div>
		<four-easy-payments v-show="showFourEasyPaymentsModal" @gotoNextModal="handleGotoNextModal" />
		<verify-your-details v-show="showVerifyYourDetailsModal" @gotoNextModal="handleGotoNextModal" />
		<enter-the-code v-show="showEnterTheCodeModal" @gotoNextModal="handleGotoNextModal" />
		<whats-your-email v-show="showWhatsYourEmailModal" @gotoNextModal="handleGotoNextModal" />
		<choose-a-password v-show="showChooseAPasswordModal" @gotoNextModal="handleGotoNextModal" />
		<complete-your-account v-show="showCompleteYourAccountModal" @gotoNextModal="handleGotoNextModal" />
		<choose-identification v-show="showChooseIdentificationModal" @gotoNextModal="handleGotoNextModal" />
		<passport-verification v-show="showPassportVerificationModal" @gotoNextModal="handleGotoNextModal" />
		<whats-your-bvn v-show="showWhatsYourBvnModal" @gotoNextModal="handleGotoNextModal" />
		<connect-your-bank v-show="showConnectYourBankModal" @gotoNextModal="handleGotoNextModal" />
		<complete-checkout v-show="showCompleteCheckoutModal" @gotoNextModal="handleGotoNextModal" />
		<four-interest-free-installment v-show="showFourInterestFreeInstallmentModal" @gotoNextModal="handleGotoNextModal" />
		<successful-transaction v-show="showSuccessfulTransactionModal" @gotoNextModal="handleGotoNextModal" />
	</div>
</template>

<script>
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
		ConnectYourBank,
		CompleteCheckout,
		FourInterestFreeInstallment,
		SuccessfulTransaction
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
			showConnectYourBankModal: false,
			showCompleteCheckoutModal: false,
			showChooseIdentificationModal: false,
			showPassportVerificationModal: false,
			showFourInterestFreeInstallmentModal: false,
			showSuccessfulTransactionModal: false,
			payload: {}
		}
	},
	methods: {
		handleGotoNextModal(param) {
			switch (param.next) {
                case 'verifyYourDetailsModal':
					this.showFourEasyPaymentsModal = false;
					this.showVerifyYourDetailsModal = true;
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
                case 'connectYourBankModal':
					this.payload = { ...param.payload, ...this.payload };
					this.showWhatsYourBvnModal = false;
					this.showConnectYourBankModal = true;
                    break;
                case 'completeCheckoutModal':
					this.payload = { ...param.payload, ...this.payload };
					this.showConnectYourBankModal = false;
					this.showCompleteCheckoutModal = true;
                    break;
                case 'fourInterestFreeInstallmentModal':
					this.payload = { ...param.payload, ...this.payload };
					this.showCompleteCheckoutModal = false;
					this.showFourInterestFreeInstallmentModal = true;
                    break;
                case 'successfulTransactionModal':
					this.payload = { ...param.payload, ...this.payload };
					this.showFourInterestFreeInstallmentModal = false;
					this.showSuccessfulTransactionModal = true;
                    break;
				default:
				this.showFourEasyPaymentsModal = true;
            }
		}
	}
};
</script>