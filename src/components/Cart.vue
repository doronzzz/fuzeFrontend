<template>
	<b-container class="mt-4 mb-4">
		<div class="grid">
			<b-card v-for="(item, idx) in products" v-bind:key="idx" :title="item.title"
				:img-src="item.images[0]"
				img-top
				tag="article"
				class="mb-2">
				<details>
					<summary>More info</summary>
					<p class="card-text" v-html="item.descriptionHtml"></p>
				</details>
				<em slot="footer">
					<b-button class="btn-info" variant="danger" @click="dropItem(item)">
						<font-awesome-icon icon="trash"></font-awesome-icon> Remove
					</b-button>
				</em>
			</b-card>
		</div>
		<b-row align-h="center">
			<div v-if="hasProducts" class="cart-summary">
				<b-button variant="danger" @click="dropAllItems()">Remove All</b-button>&nbsp;
			</div>
			<b-button v-if="hasProducts" variant="primary" @click="doCheckout()">Proceed to checkout</b-button>
			<div v-if="!hasProducts" class="cart-empty">
				Your cart is empty
			</div>
		</b-row>
	</b-container>
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

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
		grid-column-gap: 1em;
		grid-row-gap: 1em;
	}

	.card-text {
		font-size: 1rem;
	}
</style>