import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/styles.scss'
<<<<<<< HEAD
import ElementPlus from 'element-plus'


=======
import elementPlus from 'element-plus'
// import VueAgile from 'vue-agile'
>>>>>>> e11ca5e6a570468d472424fa7c27c11c262e1b24

const app = createApp(App)


app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(elementPlus)
// app.use(VueAgile)
app.mount('#app')
