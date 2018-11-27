<template>
    <div class="all-products container">
        <h1>Our Must-Have Products!</h1>
        <div class="grid">
            <b-card v-for="product in products" :key="product.id" :title="product.title"
                    :img-src="product.images[0]"
                    :img-alt="product.title"
                    img-top
                    tag="article"
                    bg-variant="light">
                <!-- <p class="card-text" v-html="product.descriptionHtml"></p> -->
                <b-button variant="block btn-block primary" @click="goToProduct(product, $event)">Read More</b-button>
            </b-card>
        </div>
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
        },
        methods: {
            goToProduct(product, ev) {
                // change route to the product page.
                this.$router.push({name: 'ProductPage', params: {id: product.id}})
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