
//Fetch pattern
function fetch(method, url, data) {
    return new Promise((resolve, reject) => {
        axios[method](url, data)
            .then(response => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            });
    })
}

//User API
export function signIn(email, password) {
    return fetch('post', '/signIn', { email, password })
}

export function signUp(email, password) {
    return fetch('post', '/signUp', { email, password })
}

export function update(token) {
    return fetch('post', '/signIn', { token })
}

//Blog API
export function getPosts() {
    return fetch('get', '/getPosts')
}

export function setPost(post) {
    return fetch('post', '/setPost', post)
}

export function deletePosts() {
    return fetch('post', '/deletePost')
}