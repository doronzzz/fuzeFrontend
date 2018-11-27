<template>
<div class="container">
<b-card-group deck>
	<b-card v-for="(item, idx) in products" v-bind:key="idx" :title="item.title"
          :img-src="item.images[0]"
          img-top
          tag="article"
          class="mb-2">
			<details>
				<summary>More info</summary>
				<p class="card-text" v-html="item.descriptionHtml"></p>
			</details>
    <b-button class="btn-info" variant="primary" @click="dropItem(item)">This is crap!</b-button>
  </b-card>
	</b-card-group>
	<div class="row">
		<b-button v-if="hasProducts" variant="primary" @click="doCheckout()">Proceed to checkout</b-button>
		<router-link to="/home" class="nav-link">
			<b-button v-if="hasProducts" variant="warn">Continue Shopping!</b-button>
		</router-link>
		<b-button v-if="hasProducts" variant="warn" @click="dropAllItems">Everything is crap!</b-button>
	</div>
</div>
</template>

<script>
	import { getItems, removeItem } from '../services/cart.js';

	export default {
		name: 'Cart',
		data: () => {
			return {
				items: []
			}
		},
		mounted: function () {
			this.items = getItems();
		},
		computed: {
			products: function () {
				return (this.items || []).slice();
			},
			hasProducts: function () {
				return true;
				return this.items && this.items.length > 0;
			}
		},
		methods: {
			dropItem: async function (item) {
				removeItem(item);
				this.items = getItems();
			}
		}

	}
</script>

<style scoped>
	.card {
		background: linear-gradient(to bottom, #fff 0%, #888 100%);
		border-radius: 20px;
    border: 1px solid #ddd;
    overflow: hidden;
		max-width: 10rem;
	}

	.card:not(:last-of-type) {
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.card-img-top {
		mix-blend-mode: multiply;
	}

	.card-text {
		font-size: 1rem;
	}

	.card-title {
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 1.17rem;
    font-weight: bold;
	}
</style>