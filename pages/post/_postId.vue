<template>
	<div>
		<FullWidthPost :post-id="$route.params.postId" @onPostOptions="togglePostModul" />
		<PostModul v-if="showPostModul" :prompt="null" :fields="fields" @onCloseModul="togglePostModul" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPostModul: false,
			fields: [
				{content: "Report", bold: true, action: false},
				{content: "Share in ...", bold: false, action: false},
				{content: "Copy link", bold: false, action: false}
			]
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