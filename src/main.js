import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/styles.scss'
import ElementPlus from 'element-plus'



const app = createApp(App)


app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
