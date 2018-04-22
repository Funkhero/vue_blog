import './assets/scss/style.scss'
import 'materialize-css'
import Store from './store'
import routes from './router'
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VueRouter.default);

const store = new Vuex.Store(Store);

export const router = new VueRouter.default({
    // mode: 'history',
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});