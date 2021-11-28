<template>
	<div>
		<four-easy-payments v-show="showFourEasyPaymentsModal" @gotoNextModal="handleGotoNextModal" />
		<verify-your-details v-show="showVerifyYourDetailsModal" @gotoNextModal="handleGotoNextModal" />
		<enter-the-code v-show="showEnterTheCodeModal" @gotoNextModal="handleGotoNextModal" />
		<whats-your-email v-show="showWhatsYourEmailModal" @gotoNextModal="handleGotoNextModal" />
		<choose-a-password v-show="showChooseAPasswordModal" @gotoNextModal="handleGotoNextModal" />
		<complete-your-account v-show="showCompleteYourAccountModal" @gotoNextModal="handleGotoNextModal" />
		<document-verification-empty v-show="showDocumentVerificationModal" @gotoNextModal="handleGotoNextModal" />
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
import DocumentVerificationEmpty from '@/forms/onboarding/DocumentVerificationEmpty';
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
		DocumentVerificationEmpty,
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
			showDocumentVerificationModal: false,
			showFourInterestFreeInstallmentModal: false,
			showSuccessfulTransactionModal: false,
			payload: {}
		}
	},
	methods: {
		handleGotoNextModal(param) {
				console.log('param', param)
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
                case 'documentVerificationModal':
					console.log('documentVerificationModal')
					this.payload = { ...param.payload, ...this.payload };
					this.showCompleteYourAccountModal = false;
					this.showDocumentVerificationModal = true;
                    break;
                case 'whatsYourBvnModal':
					this.payload = { ...param.payload, ...this.payload };
					this.showDocumentVerificationModal = false;
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