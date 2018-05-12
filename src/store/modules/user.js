
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
            axios.post('/signIn', {
                email,
                password
            }).then((response) => {
                commit('set', { type: 'user', data: response.user });
                console.log(email, password)
            }).catch((err) => {
                console.log(err)
            })
        },
        signUp({ commit }, { email, password, repassword }) {
            if (password === repassword) {
                axios.post('/signUp', {
                    email,
                    password,
                    repassword
                }).then((response) => {
                    commit('set', { type: 'user', data: response.user });
                    console.log(email, password, repassword)
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                alert('Пароли не совпадают')
            }
        },
        update({ commit }, { name, email, info }) {
            return new Promise((resolve, reject) => {
                axios.post('/users', { name, email, info }).then(
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