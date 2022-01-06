<template>
	<div>
		<div class="logos">
			<img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png" alt="logo" @click="$router.push('/')">
			<svg aria-label="Close" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24" @click="$router.push('/')"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
		</div>
		<Nuxt />
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
	div {
		position: relative;
		width: 100vw;
		height: 100vh;
		.logos {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 70px;
			padding: 18px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			z-index: 100;
			* {
				cursor: pointer;
			}
		}
	}
</style>