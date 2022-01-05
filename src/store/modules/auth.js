import api from '../../utils/api';

const state = {
    isLoggedIn: false,
    loggedUser: {},
    refreshingToken: null,
    token: null,
};

const getters = {
    getLoggedUser: (state) => state.loggedUser,
    isLoggedIn: (state) => state.isLoggedIn,
    refreshingToken: (state) => state.refreshingToken,
    token: (state) => state.token,
};

const mutations = {
    setLoggedUser: (state, user) => {
        state.loggedUser = user;
        state.isLoggedIn = true;
    },
    setRefreshToken: (state, data) => {
        state.refreshingToken = data;
    },
    updateToken: (state, data) => {
        state.token = data;
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
};

export default {
    actions,
    state,
    mutations,
    getters,
};
