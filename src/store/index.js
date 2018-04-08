
const Store = {
    state: {
        songs: [
            {
                name: 'Spring',
                author: 'Frédéric Chopin',
                src: 'music/chopin_spring.mp3',
                pic: 'img/5938870365_a0c951015b_o.jpg',
            },
            {
                name: 'Tarantelle op43',
                author: 'Frédéric Chopin',
                src: 'music/chopin-tarantelle-op43.mp3',
                pic: 'img/6284055448_e0d5c1af67_o.jpg',
            },
            {
                name: 'Mazurka in d major b71',
                author: 'Frédéric Chopin',
                src: 'music/chopin-mazurka-in-d-major-b71.mp3',
                pic: 'img/6181316022_a513b78a87_o.jpg',
            },
            {
                name: 'Mazurka in d major b4',
                author: 'Frédéric Chopin',
                src: 'music/chopin-mazurka-in-d-major-b4.mp3',
                pic: 'img/5966942286_682dcb45b6_o.jpg',
            }
        ]
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