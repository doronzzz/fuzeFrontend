<template>
    <div class="all-products">
        <h1>Our Must-Have Products!</h1>
        <div v-for="product in products" class="card">
            <img class="card-img-top" src="" alt="Yet another must have product">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{description}}</p>
                <a href="#" class="btn btn-primary" @click="goToProductPage(product, $event)">Details...</a>
            </div>
        </div>
        <div class="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'all-products',
        data: {
            products: [
                {
                    title: "First product",
                    description: "The description of the first product"
                },
                {
                    title: "Second product",
                    description: "The description of the second product"
                },
            ]
        },
        mount:
            {
                // prepare all products to show
                //localStorage.getItem();

            }
        ,
        goToProductPage: (product, ev) => {
            // change route to the product page.
            router.push({path: `/product/${product.id}`})
        }
    }
</script>