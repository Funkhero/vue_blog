
const Blog = {
    state: {
        posts: []
    },
    mutations: {
        set(state, { type, data }) {
            state[type] = data
        }
    },
    actions: {
        getPosts() {
            let _this = this;
            axios.get('/getPosts').then(response => {
                _this.commit('set', { type: 'posts', data: response.data });
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    getters: {
        posts: state => {
            return state.posts
        }
    }
};

export default Blog