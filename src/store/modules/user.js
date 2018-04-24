
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
        },
        update({ commit }, { email }) {

            console.log(email);

            return new Promise((resolve, reject) => {
                axios.post('/users', { id, userData }).then(
                    response => {
                        console.log(response);
                        commit('set', { item: 'user', payload: response.user });
                        resolve();
                    },
                    error => {
                        reject(error);
                    }
                );
            });
        }
    },
    getters: {
        getUser: state => {
            return state.user
        }
    }
};

export default User