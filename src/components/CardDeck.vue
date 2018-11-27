<template>
    <div class="card-deck-item" style="width: 18rem; background:yellow;">
        <vue-swing v-bind:key="product.id" v-for="product in products" @throwout="throwout" @throwin="throwin" :config="config">
            <div class="box">Throw me!</div>
        </vue-swing>
    </div>
</template>

<script>
    import { getProducts } from "../services/shop";
    // import { getProducts, getProductById } from './services/shop';
    const products = getProducts();
    export default {
        data: function () {
             return {
                products:[{
                        title: "First product",
                        description: "The description of the first product"
                    },
                    {
                        title: "Second product",
                        description: "The description of the second product"
                    }]
            }
        }
    }
</script>