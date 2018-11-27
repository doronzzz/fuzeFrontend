<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#"><img alt="Home" class="logo" src="../assets/logo.png"> VueShop</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarMain">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link to="/" class="nav-link"></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/collection" class="nav-link">Collection</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/product" class="nav-link">Product</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/cart" class="nav-link">Cart</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/help" class="nav-link">Help</router-link>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">

			</form>
		</div>
	</nav>
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
