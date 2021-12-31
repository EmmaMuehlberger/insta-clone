<template>
	<div class="SideBar">
		<div class="SideBar__personalAccount">
			<AccountWithNoStory :img="currentUser.img" :alt="currentUser.name" />
			<div class="SideBar__personalAccount__name">
				<nuxt-link :to="`/user/${currentUser.id}`">
					<p class="bold">{{currentUser.name}}</p>
					<p class="grey">Emma Mühlberger</p>
				</nuxt-link>
			</div>
			<p class="action">Switch</p>
		</div>
		<div class="SideBar__recommendations">
			<div class="SideBar__recommendations__header">
				<p class="grey bold capital">Suggestions for you</p>
				<p class="bold small capital">Show all</p>
			</div>
			<RecommendedUser v-for="recommendation in recommendations.slice(0, 6)" :key="recommendation.name" :img="recommendation.img" :name="recommendation.name" :user-id="recommendation.id.toString()" :current-user="currentUser" @onFollow="updateRecommendations" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentUser: null,
			recommendations: [],
		}
	},
	created() {
		this.currentUser = this.$store.getters.getCurrentUser;
		this.recommendations = this.$store.getters.getRecommendedUsers;
	},
	methods: {
		updateRecommendations() {
			this.$emit("onFollow");
		}
	}
}
</script>

<style scoped lang="scss" src="./SideBar.scss"></style>