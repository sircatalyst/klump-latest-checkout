<template>
	<div>
		<sign-in v-show="showSignInModal" @gotoNextModal="handleGotoNextModal" />
		<pay v-show="showPayModal" @gotoNextModal="handleGotoNextModal" />
		<successful-transaction v-show="showSuccessfulTransactionModal" @gotoNextModal="handleGotoNextModal" />
	</div>
</template>

<script>
import SignIn from '@/forms/returning_user/SignIn';
import Pay from '@/forms/returning_user/Pay';
import SuccessfulTransaction from '@/forms/returning_user/SuccessfulTransaction';


export default {
    name: 'Login',
	components: {
		SignIn,
		Pay,
		SuccessfulTransaction
	},
	data() {
		return {
			showSignInModal: true,
			showPayModal: false,
			showSuccessfulTransactionModal: false,
			payload: {}
		}
	},
	methods: {
		handleGotoNextModal(param) {
			switch (param.next) {
                case 'payModal':
					this.showSignInModal = false;
					this.showPayModal = true;
                    break;
                case 'successfulTransactionModal':
					this.payload = param.payload;
					this.showPayModal = false;
					this.showSuccessfulTransactionModal = true;
                    break;
				default:
				this.showSignInModal = true;
            }
		}
	}
};
</script>