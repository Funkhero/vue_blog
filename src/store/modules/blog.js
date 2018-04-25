
const Blog = {
    state: {
        posts: [
            {
                img: './img/smiling.jpg',
                title: '',
                shortcut: ''
            }
        ]
    },
    mutations: {
        set(state, { type, data }) {
            state[type] = data
        }
    },
    actions: {
        getPosts() {
            axios.post('posts').then(response => {
                commit('set', { type: 'posts', data: response.posts });
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