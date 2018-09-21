const state = {
    image: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    fetchImages() {}
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};