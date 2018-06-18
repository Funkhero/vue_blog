import introPage from '../pages/intro.page.vue'
import mainPage from '../pages/main.page.vue'
import authPage from '../pages/auth.page.vue'
import profilePage from '../pages/profile.page.vue'
import blogPage from '../pages/blog.page.vue'
import cabinet from '../pages/cabinet.page.vue'
import pageNotFound from '../pages/404.page.vue'

const routes = [
  { path: '/', component: introPage },
  { path: '/main', component: mainPage },
  { path: '/auth', component: authPage },
  {
    path: '/cabinet',
    component: cabinet,
    children: [
      {
        path: 'profile',
        component: profilePage
      }
    ]
  },
  { path: '/blog', component: blogPage },
  { path: '/*', component: pageNotFound }
];

export default routes