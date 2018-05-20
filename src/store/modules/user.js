import {
    signIn,
    signUp,
    update
} from '../../api'

const User = {
    state: {
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
                signIn(email, password).then((res) => {
                    commit('set', {type: 'user', data: res.user});
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                });
            });
        },
        signUp({ commit }, { email, password, repassword }) {
            if (password === repassword) {
                return new Promise((resolve, reject) => {
                    signUp(email, password).then((res) => {
                        commit('set', {type: 'user', data: res.user});
                        resolve(res)
                    }).catch((err) => {
                        reject(err)
                    });
                });
            } else {
                alert('Пароли не совпадают')
            }
        },
        update({ commit }, { name, email, info }) {
            return new Promise((resolve, reject) => {
                update(email, password).then((res) => {
                    commit('set', {type: 'user', data: res.user});
                    resolve(res)
                }).catch((err) => {
                    console.log(err);
                    reject(err)
                });
            });
        }
    },
    getters: {
        getUser: state => state.user
    }
};

export default User