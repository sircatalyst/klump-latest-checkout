import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

const initialState = {
    auth: auth.state,
};

const store = new Vuex.Store({
    state: {
        alert: null,
    },
    getters: {
        getAlert: (state) => state.alert,
    },
    mutations: {
        reqInit: (state) => {
            state.status = 'loading';
            state.errorLog = {};
        },
        reqSuccess: (state) => {
            state.status = 'success';
        },
        reqError: (state) => {
            state.status = 'error';
        },
        logError: (state, data) => {
            state.errorLog = data;
        },
        resetReq: (state) => {
            state.status = '';
            state.errorLog = {};
        },
        resetAll: (state) => {
            Object.keys(state).forEach((key) => {
                Object.assign(state[key], initialState[key]);
            });
        },
        clearAlert: (state) => {
            state.alert = null;
        },
        setAlert: (state, data) => {
            state.alert = data;
        },
    },
    modules: {
        auth,
    },
});

export default store;
