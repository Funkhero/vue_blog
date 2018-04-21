import './assets/scss/style.scss'
import Store from './store'
import router from './router'
import App from './App.vue'

Vue.use(Vuex);
Vue.use(VueRouter.default);

const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});