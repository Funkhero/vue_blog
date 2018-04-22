import introPage from '../pages/intro.page.vue'
import mainPage from '../pages/main.page.vue'
import authPage from '../pages/auth.page.vue'
import pageNotFound from '../pages/404.page.vue'

const routes = [
    { path: '/', component: introPage },
    { path: '/main', component: mainPage },
    { path: '/auth', component: authPage },
    { path: '/*', component: pageNotFound }
];

export default routes