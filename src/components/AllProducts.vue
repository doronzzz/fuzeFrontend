<template>
    <div class="all-products container">
        <h1 class="mt-3 mb-3">Our Must-Have Products!</h1>
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
                        <b-button variant="primary block btn-block" @click="goToProduct(product, $event)">Read More</b-button>
                    </b-card>
            </vue-swing>
        </div>
        <div class="grid">
            <b-card v-for="product in products" :key="product.id" :title="product.title"
                    :img-src="product.images[0]"
                    :img-alt="product.title"
                    img-top
                    tag="article"
                    bg-variant="light">
                <!-- <p class="card-text" v-html="product.descriptionHtml"></p> -->
                <b-button variant="primary btn-primary btn-block" @click="goToProduct(product, $event)">Read More</b-button>
            </b-card>
        </div>
        <b-button @click="loadMore(page)" class="mt-5" variant="primary btn-block block">
            Load More
        </b-button>
    </div>
</template>

<script>
    import {getProducts} from "../services/shop";

    export default {
        name: 'all-products',
        data: function () {
            return{
                products:[],
                page:1,
                config:{},
            }
        },
        mounted: async function () {
            // load all products, async'ly
            this.products = await getProducts(this.page);
            console.log(this.products);
        },
        methods: {
            async loadMore(){
                this.page = this.page+1;
                let newProducts = await getProducts(this.page);
                console.log(newProducts);
                this.products.push(...newProducts);
                //this.$set(this.products, [this.products, ...newProducts], true)
            },
            goToProduct(product, ev) {
                // change route to the product page.
                this.$router.push({name: 'ProductPage', params: {id: product.id}})
            },
            throwout:function(index){
                console.log(index)
                this.products.splice(index,1); // why is this removing only the last row?
            },
            throwin:function(index){
                console.log(index)
                this.products.splice(index,1); // why is this removing only the last row?
            },
        }
    }
</script>
<style scoped lang="scss">
@media only screen and (max-width: 720px) {
    html body .grid {
        display:none;
    }
    html body .card-deck-item {
        display: flex !important;
        justify-content: center;
        align-items: center;
    }
}
body .card-deck-item {
    display:none !important;
}
 .card-deck-item .box h4{
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
        width: 100%;
        height: calc( 100vh - 65px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-deck-item img.card-img-top {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none; 
    }

    .card-deck-item > div {
        position: absolute;
    }

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
}

.card-deck-item > div {
    position: absolute;
}
</style>