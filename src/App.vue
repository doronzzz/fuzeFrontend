<template>
	<div id="app">
		<Navbar/>
		<router-view/>
		<button role="button" class="btn btn-primary">
			lol
		</button>
	</div>
</template>
<script>
	import Navbar from "./components/Navbar.vue";

	export default {
		components: {
			Navbar
		}
	};
</script>
<style lang="scss" scoped>
	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>