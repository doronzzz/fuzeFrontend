// @ts-check

// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts } from './services/shop';


Vue.config.productionTip = false

// @ts-ignore
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')