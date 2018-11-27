// @ts-check

// @ts-ignore
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts, getProductById } from './services/shop';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
(async () => {
	const p = await getProducts();
	console.log(p);
})();

// @ts-ignore
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
