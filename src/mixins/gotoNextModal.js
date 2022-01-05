const gotoNextModalMixin = {
    data() {
        return {
            tel: '',
            payload: {
                dialCode: '',
                password: '',
                otp: '',
                active: false,
                bvn: '',
                email: '',
                passport: null,
            },
            form: {
                terms: false,
            },
        };
    },
    watch: {
        payload: {
            deep: true,
            handler(value) {
                this.tel = `+${value.dialCode}`;
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
