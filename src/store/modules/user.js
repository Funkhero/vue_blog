
const User = {
    state: {
        user: null
    },
    mutations: {

    },
    actions: {
        auth({ commit }, { email, password }) {
          console.log(email, password)
        }
    },
    getters: {

    }
};

export default User