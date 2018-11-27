<template>
	<b-container class="mt-4 mb-4">

		<h1 class="h3">{{ product.title }}</h1>
		<b-row class="mt-3">
			<b-col md="5">
				<img v-bind:src="selectedImage" class="product__image">
				<b-row class="product__images mt-2">
					<b-col md="6" lg="4" v-for="image in product.images">
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
				<div class="product__actions mt-4">
					<b-button @click="addToCart"><font-awesome-icon icon="cart-plus" /> Add To Cart</b-button>
				</div>
			</b-col>
		</b-row>

	</b-container>
</template>


<script>
	import { getProductById } from '../services/shop';
	import { addItem } from '../services/cart';

    export default {
		data() {
		    return {
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

	.product__image {
		max-width: 100%;
		border: 1px solid #eeeeee;
		-webkit-box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
		-moz-box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
		box-shadow: 0px 0px 5px 0px rgba(221,221,221,1);
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

</style>