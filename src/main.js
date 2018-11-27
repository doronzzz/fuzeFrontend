// @ts-check

// @ts-ignore
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faRing, faCartPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSwing from 'vue-swing';
library.add(faShoppingCart);
library.add(faCartPlus);
library.add(faRing);
library.add(faSpinner);

// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss';
import { getProducts } from './services/shop';
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


let interval1;
let interval2;

const doIt1 = () => {
	clearInterval(interval1);
	interval1 = setInterval(() => {
		document.body.toggleAttribute('nyan');
		doIt1();
	}, Math.random() * 5000);
}

const doIt12 = () => {
	clearInterval(interval2);
	interval2 = setInterval(() => {
		document.body.toggleAttribute('awesome');
		doIt12();
	}, Math.random() * 5000);
}

doIt1();
doIt12();