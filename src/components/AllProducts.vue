<template>
    <div class="all-products">
        <h1>Our Must-Have Products!</h1>
        <b-card-group deck class="m-3">
            <b-card v-for="product in products" :key="product.id" :title="product.title"
                    :img-src="product.images[0]"
                    :img-alt="product.title"
                    img-top
                    tag="article"
                    style="min-width: 25rem;"
                    class="mb-2"
                    bg-variant="light">
                <p class="card-text" v-html="product.descriptionHtml"></p>
                <b-button variant="primary" @click="goToProduct(product, $event)">More</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import {getProducts} from "../services/shop";

    export default {
        name: 'all-products',
        data: function () {
            return {
                products: []
            }
        },
        mounted: async function () {
            // load all products, async'ly
            this.products = await getProducts();
            console.log(this.products);
        },
        methods: {
            goToProduct(product, ev) {
                // change route to the product page.
                this.$router.push({name: 'ProductPage', params: {id: product.id}})
            }
        }
    }
</script>