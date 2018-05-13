
const User = {
    state: {
        // user: null
        user: {
            name: 'Petya',
            email: 'petya@qwerty.com',
            info: 'programmer',
        }
    },
    mutations: {
        set(state, { type, data }) {
            state[type] = data
        }
    },
    actions: {
        signIn({ commit }, { email, password }) {
            return new Promise((resolve, reject) => {
                axios.post('/signIn', {
                    email,
                    password
                }).then((response) => {
                    commit('set', { type: 'user', data: response.user });
                    resolve(response)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            });
        },
        signUp({ commit }, { email, password, repassword }) {
            if (password === repassword) {
                return new Promise((resolve, reject) => {
                    axios.post('/signUp', {
                        email,
                        password,
                        repassword
                    }).then((response) => {
                        commit('set', { type: 'user', data: response.user });
                        resolve(response)
                    }).catch((err) => {
                        console.log(err)
                        reject(err)
                    })
                });
            } else {
                alert('Пароли не совпадают')
            }
        },
        update({ commit }, { name, email, info }) {
            return new Promise((resolve, reject) => {
                axios.post('/userUpdate', { name, email, info }).then(
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
        getUser: state => state.user
    }
};

export default User