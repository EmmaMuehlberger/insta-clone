<template>
	<div>
		<FullWidthPost :post-id="$route.params.postId" @onPostOptions="togglePostModul" />
		<PostModul v-if="showPostModul" @onCloseModul="togglePostModul" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPostModul: false
		}
	},
	head() {
		return {
			title: "Post • Instagram"
		}
	},
	methods: {
			togglePostModul() {
				this.showPostModul = !this.showPostModul;
			}
		},
	}
</script>

<style>

</style>