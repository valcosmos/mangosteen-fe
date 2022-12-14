import { routes } from './config/routes'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { App } from './App'
import { history } from './shared/history'
import '@svgstore'

const router = createRouter({ history, routes })

createApp(App).use(router).mount('#app')
