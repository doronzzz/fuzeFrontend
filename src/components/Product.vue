<template>
	<b-container v-if="! product.vendor">
		<b-row align-h="center" class="mt-4 mb-4"><font-awesome-icon icon="spinner" /></b-row>
	</b-container>
	<b-container class="bgbg mt-4 mb-4" v-else>
		<h1 class="h3">{{ product.title }}</h1>
		<b-row class="mt-3">
			<b-button variant="secondary block btn-block" @click="addToCart(product)"><font-awesome-icon icon="cart-plus" /> Add To Cart</b-button>
		</b-row>
		<b-row class="mt-3">
			<b-col md="5" class="mb-3">
				<img v-bind:src="selectedImage" class="product__image">
				<b-row class="product__images mt-2">
					<b-col cols="4" v-if="product.images.length > 1" v-for="image in product.images">
						<img v-bind:src="image" class="product__images__image" @click="selectImage(image)" />
					</b-col>
				</b-row>
			</b-col>
			<b-col md="7">
				<div class="product__vendor">
					<font-awesome-icon icon="ring" />
					{{ product.vendor }}
				</div>
				<div class="product__description mt-2" v-html="product.descriptionHtml"></div>
				<b-container class="mt-4">
					<b-row align-h="start">
						<b-col xs="6" sm="5" md="3" class="product__price h4">${{ product.price }}</b-col>
						<b-col md="6"><b-button @click="addToCart"><font-awesome-icon icon="cart-plus" /> Add To Cart</b-button></b-col>
					</b-row>
				</b-container>
			</b-col>
		</b-row>
		<b-row class="mt-3">
			<b-button variant="secondary block btn-block" @click="addToCart(product)"><font-awesome-icon icon="cart-plus" /> Add To Cart</b-button>
		</b-row>

		<b-button v-bind:key="c" v-for="(c, idx) in crap" :b-id="idx" :variant="c" @click="addToCart(product)"><font-awesome-icon icon="cart-plus" /> Add To Cart</b-button>
	</b-container>
</template>


<script>
	import { getProductById } from '../services/shop';
	import { addItem } from '../services/cart';

    export default {
		data() {
		    return {
				crap: ['success', 'primary', 'secondary', 'danger', 'warning', 'success', 'danger'],
				selectedImage: null,
				product: {
				    images: [],
					description: null
				}
			};
		},
		created() {
            this.loadProduct(this.$route.params.id);
		},
    	methods: {
		    async loadProduct(productID) {
                this.product = await getProductById(productID);
                this.selectImage(this.product.images[0]);
			},
			addToCart() {
                addItem(this.product);
			},
            selectImage(image) {
		        this.selectedImage = image;
			}
		}
    };
</script>

<style lang="scss" scoped>

@keyframes UBER {
  0%   { opacity: 0; }
  50% { opacity: 1; }
	100% { opacity: 0; }
}

	.product__image {
		max-width: 100%;
		border: 1px solid #eeeeee;
		-webkit-box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
		-moz-box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
		box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
	}

	[b-id] {
		animation: UBER 1s ease-in-out infinite;
	}

	[b-id="1"] {
		position: fixed;
    top: 345px;
    left: 45px;
    transform: rotate(15deg);
    zoom: 1.5;
		animation-delay: 300ms;
	}

	[b-id="2"] {
		position: fixed;
    top: 50%;
    left: 50%;
    transform: rotate(174deg);
    zoom: 3;
		animation-delay: 400ms;
	}

	[b-id="3"] {
		position: fixed;
    bottom: 19px;
    right: 13px;
    transform: rotate(9deg);
    zoom: 1.5;
		animation-delay: 500ms;
	}

	[b-id="4"] {
		position: fixed;
    top: 80%;
    left: 45%;
    transform: rotate(94deg);
    zoom: 0.8;
		animation-delay: 50ms;
	}

	[b-id="5"] {
		position: fixed;
    top: 85%px;
    left: 70%;
    transform: rotate(3deg);
    zoom: 1.1;
		animation-delay: 10ms;
	}

	[b-id="6"] {
		position: fixed;
    top: 15%;
    left: 35%;
    transform: rotate(-4deg);
    zoom: 1.8;
	}

	.product__vendor {
		font-size: 13px;
		display: inline;
		padding: 3px 5px;
		border-radius: 10px;
		color: #ffffff;
		background-color: #FA924D;
	}

	.product__description {
		font-size: 12px;
		color: #555555;
	}

	.product__images__image {
		@extend .product__image;
		margin-top: 10px;
		cursor: pointer;
	}

	.product__price {
		padding: 6px;
	}

	.bgbg {
		background: rgba(255, 255, 255, 0.7);
	}

</style>