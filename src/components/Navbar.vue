<template>
	<b-navbar toggleable="md">

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-navbar-brand href="#"><img alt="Home" class="logo" src="../assets/logo.png"> VueShop</b-navbar-brand>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item><router-link to="/home" class="nav-link">Home</router-link></b-nav-item>
				<b-nav-item><router-link to="/all-products" class="nav-link">All Products</router-link></b-nav-item>
				<b-nav-item><router-link to="/product" class="nav-link">Product</router-link></b-nav-item>
				<b-nav-item><router-link to="/cart" class="nav-link">Cart</router-link></b-nav-item>
				<b-nav-item><router-link to="/help" class="nav-link">Help</router-link></b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">

			</b-navbar-nav>

		</b-collapse>
	</b-navbar>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.navbar {
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;

		.logo {
			width: 64px;
			padding: 0 10px;
			vertical-align: middle;
		}

		a {
			color: #2c3e50;
			&.router-link-exact-active, &.active {
				color: #fe885f;
			}
		}
	}
</style>
