<template>
	<div>
		<AppHeader :show-account-menu="showAccountMenu" :show-activity-feed="showActivityFeed" :current-user="currentUser.id" @onProfileClicked="toggleAccountMenu" @onFeedClicked="toggleActivityFeed" />
		<AccountMenu v-if="showAccountMenu" :current-user="currentUser.id" @onCloseMenu="toggleAccountMenu" />
		<ActivityFeed v-if="showActivityFeed" @onCloseFeed="toggleActivityFeed" />
		<Nuxt />
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentUser: null,
			showAccountMenu: false,
			showActivityFeed: false
		}
	},
	created() {
		this.currentUser = this.$store.getters.getCurrentUser;
	},
	methods: {
		toggleAccountMenu() {
            this.showAccountMenu = !this.showAccountMenu;
		},
		toggleActivityFeed() {
            this.showActivityFeed = !this.showActivityFeed;
		}
	},
}
</script>

<style>

</style>