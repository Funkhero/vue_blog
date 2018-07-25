import introPage from '../pages/intro.page.vue'
import mainPage from '../pages/main.page.vue'
import authPage from '../pages/auth.page.vue'
import profilePage from '../pages/profile.page.vue'
import blogPage from '../pages/blog.page.vue'
import pageNotFound from '../pages/404.page.vue'
import cabinet from '../pages/cabinet/cabinet.list.vue'
import cabinetLayout from '../pages/cabinet/cabinet.vue'
import postCreate from '../pages/cabinet/cabinet.post.create.vue'

const routes = [
  {
    path: '/',
    component: introPage
  },
  {
    path: '/main',
    component: mainPage
  },
  {
    path: '/auth',
    component: authPage
  },
  {
    path: '/cabinet',
    component: cabinetLayout,
    name: 'cabinet',
    children: [
      {
        path: '',
        component: cabinet,
        name: 'cabinetList'
      },
      {
        path: 'profile',
        component: profilePage,
        name: 'profile'
      },
      {
        path: 'postCreate',
        component: postCreate,
        name: 'postCreate'
      },
      {
        path: 'postCreate/:id',
        component: postCreate,
        name: 'currentPostCreate'
      }
    ]
  },
  {
    path: '/blog',
    component: blogPage,
    children: [
      {
        path: '',
        component: cabinet,
        name: 'cabinetList'
      },
      {
        path: 'posts',
        component: blogList,
        name: 'blogList'
      },
      {
        path: 'posts/:id',
        component: postPage,
        name: 'postPage'
      }
    ]
  },
  {
    path: '/*',
    component: pageNotFound
  }
];

export default routes