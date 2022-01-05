import api from '../../utils/api';

const state = {
    isLoggedIn: false,
    isPhoneVerified: false,
    otpSent: false,
    phone: null,
    loggedUser: {},
    refreshingToken: null,
    token: null,
};

const getters = {
    getLoggedUser: (state) => state.loggedUser,
    getIsPhoneVerified: (state) => state.isPhoneVerified,
    getOtpStatus: (state) => state.otpSent,
    getPhone: (state) => state.phone,
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
    setRefreshToken: (state, data) => {
        state.refreshingToken = data;
    },
    updateToken: (state, data) => {
        state.token = data;
    },
    setPhone: (state, data) => {
        state.phone = data;
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
};

export default {
    actions,
    state,
    mutations,
    getters,
};
