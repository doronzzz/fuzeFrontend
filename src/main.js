// @ts-check

// @ts-ignore
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faShoppingCart);

// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts, getProductById } from './services/shop';

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

(async () => {
	const p = await getProductById('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4MTAwNDA1ODYzMzg=');
	console.log(p);
})();

// @ts-ignore
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
