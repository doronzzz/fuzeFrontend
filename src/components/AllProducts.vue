<template>
    <div class="all-products">
        <h1>Our Must-Have Products!</h1>
        <b-card v-for="product in products" :key="product.id" :title="product.title"
                :img-src="product.imageUrl"
                :img-alt="product.title"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text">
                {{product.description}}
            </p>
            <b-button href="#" variant="primary" @click="goToProductPage(product, $event)">Details...</b-button>
        </b-card>
    </div>
</template>

<script>
    import {getProducts} from "../services/shop";

    export default {
        name: 'all-products',
        data: function () {
            return {
                products: [
                    {
                        title: "First product",
                        description: "The description of the first product",
                        imageUrl: "aaa"
                    },
                    {
                        title: "Second product",
                        description: "The description of the second product",
                        imageUrl: "aaa"
                    },
                ]
            }
        },
        created: () => {
            // products: getProducts();
            // prepare all products to show
            //localStorage.getItem();

        },
        goToProductPage: (product, ev) => {
            // change route to the product page.
            this.$router.push({path: `/product/${product.id}`})
        }
    }
</script>