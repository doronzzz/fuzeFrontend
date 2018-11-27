// @ts-check

// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts, getProductById } from './services/shop';

(async () => {
	const p = await getProductById('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA1ODYzMzg=');
	console.log(p);
})();

Vue.config.productionTip = false

// @ts-ignore
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
