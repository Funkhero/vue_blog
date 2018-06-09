import './assets/scss/style.scss'
import 'materialize-css'
import { sync } from 'vuex-router-sync'
import Store from './store'
import routes from './router'
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.use(VueRouter.default);
Vue.use(Notifications.default);

const store = new Vuex.Store(Store);

export const router = new VueRouter.default({
    // mode: 'history',
    routes
});

sync(store, router);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});