<template>
    <b-navbar toggleable="md" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand class="our-logo"><router-link to="/"><img alt="Home" class="logo" src="../assets/logo.png">VueShop</router-link></b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <router-link to="/cart" class="nav-link">
                        <cart-button></cart-button>
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    import CartButton from './CartButton';

    export default {
        components: {
            CartButton
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navbar {
        border-bottom: 1px solid #eee;

        .logo {
            width: 58px;
            padding: 0 10px;
            vertical-align: middle;
        }

        a {
            color: #2c3e50;

            &.router-link-exact-active, &.active {
                color: #fe885f;
            }
        }

        .our-logo .router-link-active {
            text-decoration: none;
        }
    }
</style>
