<template>
	<div class="shopping-cart">
		<font-awesome-icon icon="shopping-cart" />
		<div class="shopping-cart__badge">2</div>
	</div>
</template>

<script>
    export default {
        data: function () {
            return {};
        }
    }
</script>

<style scoped lang="scss">
	.shopping-cart {
		position: relative;
		width: 36px;
		height: 36px;
		padding: 7px 8px;
		background-color: #eeeeee;
		border-radius: 50%;
		transition: all 250ms;
		&:hover {
			background-color: #dddddd;
	 	}
	}

	.shopping-cart__badge {
		position: absolute;
		top: -3px;
		right: -3px;
		width: 16px;
		height: 16px;
		color: #ffffff;
		font-size: 10px;
		background-color: #ff0000;
		border-radius: 50%;
		text-align: center;
	}
</style>