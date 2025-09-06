import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponnents from './ui-components/index.js'

const app = createApp(App)

uiComponnents.map(component => app.component(component.name, component))
app.use(router)
app.use(store)
app.mount('#app')
