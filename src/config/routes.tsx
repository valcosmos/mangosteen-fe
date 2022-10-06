import { RouteRecordRaw } from 'vue-router'
// import { First } from '../components/welcome/First'
// import { Second } from '../components/welcome/Second'
// import { Third } from '../components/welcome/Third'
// import { Forth } from '../components/welcome/Forth'

// import { FirstActions } from '../components/welcome/FirstActions'
// import { SecondActions } from '../components/welcome/SecondActions'
// import { ThirdActions } from '../components/welcome/ThirdActions'
// import { ForthActions } from '../components/welcome/ForthActions'

// import { StartPage } from '../views/StartPage'

// import { Welcome } from '../views/Welcome'
// import { ItemPage } from '@/views/ItemPage'
// import { ItemList } from '@/components/Item/ItemList'
// import { ItemCreate } from '@/components/Item/ItemCreate'
// import { TagPage } from '@/views/TagPage'
// import { TagCreate } from '@/components/tag/TagCreate'
// import { TagEdit } from '@/components/tag/TagEdit'
// import { SignInPage } from '@/views/SignInPage'
// import { StatisticsPage } from '@/views/StatisticsPage'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: () => import('@/views/Welcome'),
    children: [
      { path: '', redirect: '/welcome/1' },
      {
        path: '1',
        name: 'Welcome1',
        components: {
          main: () => import('../components/welcome/First'),
          footer: () => import('../components/welcome/FirstActions')
        }
      },
      {
        path: '2',
        name: 'Welcome2',
        components: {
          main: () => import('../components/welcome/Second'),
          footer: () => import('../components/welcome/SecondActions')
        }
      },
      {
        path: '3',
        name: 'Welcome3',
        components: {
          main: () => import('../components/welcome/Third'),
          footer: () => import('../components/welcome/ThirdActions')
        }
      },
      {
        path: '4',
        name: 'Welcome4',
        components: {
          main: () => import('../components/welcome/Forth'),
          footer: () => import('../components/welcome/ForthActions')
        }
      }
    ]
  },
  {
    path: '/start',
    component: () => import('@/views/StartPage')
  },
  {
    path: '/items',
    component: () => import('@/views/ItemPage'),
    children: [
      { path: '', component: () => import('@/components/Item/ItemList') },
      {
        path: 'create',
        component: () => import('@/components/Item/ItemCreate')
      }
    ]
  },
  {
    path: '/tags',
    component: () => import('@/views/TagPage'),
    children: [
      {
        path: 'create',
        component: () => import('@/components/tag/TagCreate')
      },
      { path: ':id/edit', component: () => import('@/components/tag/TagEdit') }
    ]
  },
  {
    path: '/sign_in',
    component: () => import('@/views/SignInPage')
  },
  {
    path: '/statistics',
    component: () => import('@/views/StatisticsPage')
  }
]
