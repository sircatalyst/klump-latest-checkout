const gotoNextModalMixin = {
    data() {
        return {
            payload: {
                dialCode: '',
                password: '',
                otp: '',
                active: false,
                tel: '',
                bvn: '',
                email: '',
                passport: null,
                firstname: '',
                lastname: '',
                date_of_birth: '',
                address: '',
                apartment: '',
                city: '',
                terms: false,
            },
        };
    },
    computed: {
        countryCode() {
            return `+${this.payload.dialCode}`;
        },
    },
    watch: {
        payload: {
            deep: true,
            handler(value) {
                this.dialCode = value.dialCode;
            },
        },
    },
    methods: {
        onSelect({ dialCode: dialCode }) {
            this.payload.dialCode = dialCode;
        },
        saveOtpCode(code) {
            this.payload.otp = code;
        },
        gotoNextModal(isValid, data, nextModal) {
            if (!isValid) {
                this.$emit('gotoNextModal', {
                    next: nextModal,
                    payload: { ...data },
                });
            }
        },
    },
};
export default gotoNextModalMixin;
