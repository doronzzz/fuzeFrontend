<template>
    <div class="card-deck-item">
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
                    }],
                config:{}
            }
        },
        methods:{
            throwout:function(index){
                this.products.splice(index,1); // why is this removing only the last row?
            },
            throwin:function(){
                this.products.splice(index,1); // why is this removing only the last row?
            },
        },
    }
</script>


<style scoped lang="scss">
	.card-deck-item .box{
        background:red;
        width:350px;
        height:450px;
    }
    .card-deck-item {
        position: relative;
        display: block;
        width: 100vw;
        height: calc( 100vh - 65px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-deck-item > div {
        position: absolute;
    }
</style>