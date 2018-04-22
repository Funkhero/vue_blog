
const User = {
    state: {
        user: null
    },
    mutations: {
        set(state, { type, data }) {
            state[type] = data
        }
    },
    actions: {
        auth({ commit }, { email, password, repassword }) {
            if (password === repassword || !repassword) {
                axios.post('/api/auth', {
                    email,
                    password,
                    repassword
                }).then((res) => {
                    commit('set', { tupe: 'user', data: res });
                    console.log(email, password, repassword)
                }).catch((err) => {
                    console.log(err + ' типа ошибка')
                })
            } else {
                console.log('Все сломалось')
            }
        }
    },
    getters: {
        getUser: state => {
            return state.user
        }
    }
};

export default User