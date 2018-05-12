
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
                img: 'img/picture.jpg',
                title: 'Some title for post'
            }).then(response => {
                this.commit('setOne', { type: 'posts', data: response.data });
            }).catch((err) => {
                console.log(err)
            })
        },
        deletePosts() {
            axios.post('/deletePost').then(response => {
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    getters: {
        posts: state => state.posts
    }
};

export default Blog