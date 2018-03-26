import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router/index'
import './assets/style.css'
Vue.use(iView)

new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})