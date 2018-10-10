import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({ commit }, images) {
        // Get the access token
        const { token } = rootState.auth;

        // Call our API module to do the upload
        await api.upload(images, token);

        // Redirect our user to ImageList component
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};