import './assets/scss/style.scss'
import Store from './store/'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
