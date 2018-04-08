
const Store = {
    state: {

    },
    actions: {
        getSongs({ commit }, view) {
            //TODO here we can add some api request
            commit('set', { type: 'songs', items: '' })
        }
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items
        }
    },
    getters: {
        songs(state) {
            return state.songs
        }
    },
    created () {
        console.log('module created');
    }
};

export default Store;