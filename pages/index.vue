<template>
	<div class="Page" :class="{noScroll: showPostModul}">
		<div class="Page__main Page__main--home">
			<StoryList :stories="stories" />
			<SideBar @onFollow="updatePosts" />
			<div class="PostList">
				<HomePost v-for="post in posts.slice().reverse()" :key="post.id" :post="post" :user="users.filter(user => user.id.toString() === post.user.toString())[0]" @onPostOptions="togglePostModul" />
			</div>
		</div>
		<PostModul v-if="showPostModul" :prompt="null" :fields="fields" @onCloseModul="togglePostModul" />
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	data() {
		return {
			posts: [],
			users: [],
			showAccountMenu: false,
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
			title: "Instagram"
		}
	},
	created() {
		this.updatePosts();
	},
	methods: {
		togglePostModul() {
			this.showPostModul = !this.showPostModul;
		},
		updatePosts() {
			this.posts = this.$store.getters.getSubscribedPosts;
			this.users = this.$store.getters.getSubscribedUsers;
			this.stories = this.$store.getters.getStories;
		}
	},
}
</script>
