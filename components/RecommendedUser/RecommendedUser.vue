<template>
    <div class="RecommendedUser">
		<AccountWithNoStory :id="userId" :img="img" :alt="name" />
		<div class="RecommendedUser__name">
			<nuxt-link :to="`/user/${userId}`">	
				<p class="bold small">{{name}}</p>
				<p class="grey verySmall">Followed by ahua and 2 more</p>
			</nuxt-link>
		</div>
		<p v-if="currentUser.follows.includes(Number(userId))" class="small bold" @click="unfollowUser">Unfollow</p>
		<p v-else class="action" @click="followUser">Follow</p>
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		}, 
		userId: {
			type: String,
			default: ""
		},
		currentUser: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		followUser() {
			this.$store.commit("startFollowing", Number(this.userId));
			this.$emit("onFollow");
		},
		unfollowUser() {
			this.$store.commit("stopFollowing", Number(this.userId));
			this.$emit("onFollow");
		},
	}
}
</script>

<style scoped lang="scss" src="./RecommendedUser.scss"></style>