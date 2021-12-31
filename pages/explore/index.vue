<template>
	<div class="Page Page__main ExplorePage">
		<div class="ExplorePage__postGrid">
			<GeneralPost v-for="post in posts.slice().reverse()" :key="post.id" :post-id="post.id.toString()" :img="post.img" :img-count="post.img.length" :img-alt="`${post.id}'s post`" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: []
		}
	},
	head() {
		return {
			title: "Explore • Instagram"
		}
	},
	created() {
		this.posts = this.$store.getters.getExplorePosts;
	}
}
</script>

<style scoped lang="scss" src="./ExplorePage.scss"></style>