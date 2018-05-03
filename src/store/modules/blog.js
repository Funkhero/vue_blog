
const Blog = {
    state: {
        posts: []
    },
    mutations: {
        set(state, { type, data }) {
            state[type] = data
        },
        setOne(state, { type, data }) {
            state[type].push(data)
        }
    },
    actions: {
        getPosts() {
            axios.get('/getPosts').then(response => {
                this.commit('set', { type: 'posts', data: response.data });
            }).catch((err) => {
                console.log(err)
            })
        },
        setPost() {
            axios.post('/setPost', {
                img: '/img/smiling.jpg',
                title: 'Some title dsfgdfg sdfh sdfh'
            }).then(response => {
                console.log(response);
                this.commit('setOne', { type: 'posts', data: response.data });
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