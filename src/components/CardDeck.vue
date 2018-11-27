<template>
    <div class="card-deck-item">
        <vue-swing v-bind:key="product.id" v-for="(product,index) in products" @throwout="throwout(index)" @throwin="throwin(index)" :config="config">
                  <b-card :title="product.title" class="box"
                            :img-src="product.images[0]"
                            :img-alt="product.title"
                            img-top
                            tag="article"
                            style="max-width: 20rem;">
                    <p class="card-text">
                        <!-- {{product.description}} -->
                    </p>
                    <b-button v-bind:href="'/product/' + product.id" variant="primary">Go somewhere</b-button>
                </b-card>
        </vue-swing>
    </div>
</template>

<script>
    import { getProducts } from "../services/shop";
    // import { getProducts, getProductById } from './services/shop';
    export default {
        mounted:async function(){
            this.products = await getProducts();
        },
        data:function(){
            return{
                products:[],
                config:{},
            }
        },
        methods:{
            throwout:function(index){
                console.log(index)
                this.products.splice(index,1); // why is this removing only the last row?
            },
            throwin:function(index){
                console.log(index)
                this.products.splice(index,1); // why is this removing only the last row?
            },
        },
    }
</script>


<style scoped lang="scss">
    .card-deck-item .box h4,
    .ellipsis{
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        width:90%;
    }
	.card-deck-item .box{
        width:350px;
        height:450px;
        overflow:hidden;
    }
    .card-deck-item {
        position: relative;
        display: block;
        width: 100vw;
        height: calc( 100vh - 65px);
        display: flex;
        align-items: center;
        justify-content: center;

        img.card-img-top {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none; 
        }

    }

    .card-deck-item > div {
        position: absolute;
    }
</style>