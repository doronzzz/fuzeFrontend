// @ts-check

// @ts-ignore
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSwing from 'vue-swing'
library.add(faShoppingCart);

// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts, getProductById } from './services/shop';
import { addItem, getItems } from './services/cart';

Vue.use(BootstrapVue);
Vue.component('vue-swing', VueSwing)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

(async () => {
	const already = getItems();
	if (already && already.length > 0) return;
	const p = await getProducts();
	addItem(p[1]);
	addItem(p[2]);
	addItem(p[7]);
	addItem(p[19]);
})();

// @ts-ignore
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
