import api from '../../utils/api';

const state = {
    isLoggedIn: false,
    isPhoneVerified: false,
    otpSent: false,
    userBio: null,
    phone: null,
    docType: '',
    doc: '',
    bvn: '',
    accountNumber: '',
    monoAuthCode: '',
    bankName: '',
    email: null,
    password: null,
    loggedUser: {},
    refreshingToken: null,
    isBankConnected: false,
    token: null,
};

const getters = {
    getLoggedUser: (state) => state.loggedUser,
    getIsPhoneVerified: (state) => state.isPhoneVerified,
    getOtpStatus: (state) => state.otpSent,
    getUserBio: (state) => state.userBio,
    getDocType: (state) => state.docType,
    getDoc: (state) => state.doc,
    getPhone: (state) => state.phone,
    getEmail: (state) => state.email,
    getBvn: (state) => state.bvn,
    getAccountNumber: (state) => state.accountNumber,
    getIsBankConnected: (state) => state.isBankConnected,
    getMonoAuthCode: (state) => state.monoAuthCode,
    getBankName: (state) => state.bankName,
    getPassword: (state) => state.password,
    isLoggedIn: (state) => state.isLoggedIn,
    refreshingToken: (state) => state.refreshingToken,
    token: (state) => state.token,
};

const mutations = {
    setLoggedUser: (state, user) => {
        state.loggedUser = user;
        state.isLoggedIn = true;
    },
    setOtpStatus: (state, bool) => {
        state.otpSent = bool;
    },
    setUserBio: (state, data) => {
        state.userBio = data;
    },
    setDocType: (state, type) => {
        state.docType = type;
    },
    setDoc: (state, file) => {
        state.doc = file;
    },
    setBvn: (state, bvn) => {
        state.bvn = bvn;
    },
    setAccountNumber: (state, account_number) => {
        state.accountNumber = account_number;
    },
    setIsBankConnected: (state, bool) => {
        state.isBankConnected = bool;
    },
    setMonoAuthCode: (state, code) => {
        state.monoAuthCode = code;
    },
    setBankName: (state, name) => {
        state.bankName = name;
    },
    setRefreshToken: (state, data) => {
        state.refreshingToken = data;
    },
    updateToken: (state, data) => {
        state.token = data;
    },
    setPhone: (state, data) => {
        state.phone = data;
    },
    setEmail: (state, email) => {
        state.email = email;
    },
    setPassword: (state, password) => {
        state.password = password;
    },
    setPhoneVerified: (state, bool) => {
        state.isPhoneVerified = bool;
    },
};

const actions = {
    signIn: ({ commit }, data) => {
        delete data.terms;
        api.post('login', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                commit('setLoggedUser', response.data);
                commit('setRefreshToken', response.refreshToken);
                commit('updateToken', response.token);
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
    generatePhoneOtp({ commit }, data) {
        api.post('register/phone-otp', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                commit('setPhone', data.phone);
                commit('setOtpStatus', true);
                commit('setAlert', {
                    type: 'success',
                    message: response.message,
                });
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setOtpStatus', false);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
    verifyPhoneOtp({ commit }, data) {
        api.post('register/phone-otp-verify', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                commit('setPhoneVerified', response.data.is_validated);
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setPhoneVerified', false);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
    createUser({ commit }, data) {
        api.post('register', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                commit('setUserBio', response.data);
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
    verifyUserId({ commit }, data) {
        api.post('register/pre-qualify/validate-id', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                commit('setAlert', {
                    type: 'success',
                    message: response.message,
                });
                commit('setDoc', data.file);
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
    prequalifyUser({ commit }, data) {
        api.post('register/pre-qualify', data)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(async (response) => {
                const error = await response.text().then((text) => text);
                return Promise.reject(error);
            })
            .catch((error) => {
                const errorData = JSON.parse(error);
                commit('setAlert', {
                    type: 'danger',
                    message: errorData.message,
                });
            });
    },
};

export default {
    actions,
    state,
    mutations,
    getters,
};
