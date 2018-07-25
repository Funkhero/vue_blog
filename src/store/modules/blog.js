import {
  getPosts,
  setPost,
  deletePosts
} from '../../api'

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
    loadPosts() {
      getPosts()
        .then(response => {
          this.commit('set', { type: 'posts', data: response.data });
        }).catch((err) => {
          console.log(err)
        })
    },
    setPost() {
      setPost({
        img: '/img/picture.jpg',
        title: 'Some title for post'
      }).then(response => {
        this.commit('setOne', { type: 'posts', data: response.data });
      }).catch((err) => {
        console.log(err)
      })
    },
    deletePosts() {
      deletePosts()
        .then(response => {})
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {
    getPosts: state => state.posts,
    getOnePost: state => (postId) => {
      if (!state.posts) return false;
      return state.posts.find(el => el.id === postId);
    }
  }
};

export default Blog