<template>
	<div class="ActivityFeedOverlay" @click="closeFeed">
		<div class="ActivityFeed">
			<div class="ActivityFeed__arrow"></div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
			<div class="ActivityFeed__item">
				<AccountWithNoStory img="profile-pic3.jpg" img-alt="profile pic" />
				<p><strong class="bold">Ahua</strong> started following you <span class="grey">11 we.</span></p>
				<button class="btn btn--light">Followed</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeFeed() {
			this.$emit("onCloseFeed");
		}
	}
}
</script>

<style scoped lang="scss" src="./ActivityFeed.scss"></style>