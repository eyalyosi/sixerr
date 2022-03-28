import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/styles.scss'
import elementPlus from 'element-plus'


const app = createApp(App)

app.use(elementPlus)
app.use(router)
app.use(store)
app.mount('#app')
