import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/styles.scss'
import elementPlus from 'element-plus'
// import VueAgile from 'vue-agile'

const app = createApp(App)


app.use(router)
app.use(store)
app.use(elementPlus)
// app.use(VueAgile)
app.mount('#app')
