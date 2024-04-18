import global from './global'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({store}) => {
    store.$global = app.config.globalProperties
})

Object.keys(global).forEach((method) => {
    app.config.globalProperties[method] = global[method]
})

app.use(pinia).use(router)

createApp(App).use(createPinia()).use(router).mount('#app')
