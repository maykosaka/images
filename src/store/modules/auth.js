import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        const queryString = qs.parse(hash.replace('#', ''));

        commit('setToken', queryString.access_token);
    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};