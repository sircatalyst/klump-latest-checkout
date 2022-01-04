const authenticateUserMixin = {
    data() {
        return {
            loginPayload: {
                terms: false,
                password: '',
                email: '',
                type: 'email_password',
                persona: 'user',
            },
            loggedUser: {},
            alert: null,
            token: null,
            refreshToken: null,
        };
    },
    methods: {
        authenticateUser() {
            /**
             * makes request to the api
             * stores all neccessary user credentials
             * goes to the payModal
             */
            let data = { ...this.loginPayload };
            delete data.terms;
            fetch(`${process.env.VUE_APP_API_URL}login`, {
                method: 'POST',
                headers: {
                    'Client-Id': `${process.env.VUE_APP_CLIENT_ID}`,
                    'Client-Key': `${process.env.VUE_APP_CLIENT_KEY}`,
                    'Client-Secret': `${process.env.VUE_APP_CLIENT_SECRET}`,
                    'Content-type': 'application/json;',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (!response.ok) {
                        return Promise.reject(response);
                    }
                    return response.json();
                })
                .then((response) => {
                    this.loggedUser = response.data;
                    this.refreshToken = response.refreshToken;
                    this.token = response.token;
                    this.$emit('gotoNextModal', {
                        next: 'payModal',
                        payload: {},
                    });
                })
                .catch(async (response) => {
                    const error = await response.text().then((text) => text);
                    return Promise.reject(error);
                })
                .catch((error) => {
                    const errorData = JSON.parse(error);
                    this.alert = {
                        type: 'danger',
                        message: errorData.message,
                    };
                });
        },
    },
};
export default authenticateUserMixin;
