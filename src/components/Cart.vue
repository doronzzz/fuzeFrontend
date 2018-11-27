<template>
<div class="container">
    <h1 class="mt-3 mb-3">Your Cart</h1>
    <div class="grid">
        	<b-card v-for="(item, idx) in products" v-bind:key="idx" :title="item.title"
            :img-src="item.images[0]"
            img-top
            tag="article"
            class="mb-2">
            <b-button class="btn-info" variant="primary btn-block block" @click="dropItem(item)">Remove Item</b-button>
        </b-card>
    </div>
	<div class="row">
		<b-button v-if="hasProducts" variant="primary" @click="doCheckout()">Proceed to checkout</b-button>
		<div v-if="hasProducts" class="cart-summary">
			<b-button variant="warn" @click="dropAllItems()">Everything is crap!</b-button>
		</div>
		<div v-if="!hasProducts" class="cart-empty">
			Your cart is empty
		</div>
	</div>
	<div class="row">
		<router-link to="/" class="nav-link">
			<b-button variant="warn">Continue Shopping!</b-button>
		</router-link>
	</div>
</div>
</template>
<script>
	import { getItems, removeItem, clearAll, stream$ } from '../services/cart.js';

	export default {
		name: 'Cart',
		data: () => {
			return {
				items: []
			}
		},
		mounted: function () {
			this.items = getItems();
			this.unsub = stream$.subscribe((items) => this.items = items).unsubscribe;
		},
		destroyed: function () {
			this.unsub();
		},
		computed: {
			products: function () {
				return (this.items || []).slice();
			},
			hasProducts: function () {
				return this.items && this.items.length > 0;
			}
		},
		methods: {
			dropItem: function (item) {
				removeItem(item);
			},
			dropAllItems: function () {
				clearAll();
			}
		}

	}
</script>

<style scoped>
	

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
}

</style>