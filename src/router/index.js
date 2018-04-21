import introPage from '../pages/intro.page.vue'
import authPage from '../pages/auth.page.vue'

const routes = new VueRouter.default({
    routes: [
        { path: '/', component: introPage },
        { path: '/auth', component: authPage }
    ]
});

export default routes