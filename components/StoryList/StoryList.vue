<template>
	<div ref="storyList" class="StoryList" :v-if="stories.length > 0">
		<div v-for="story in stories" :key="story.name" class="StoryList__container">
			<nuxt-link :to="`/stories/${story[0].id}`">
				<StoryPreview :story-name="story[0].name" :story-img="story[0].img" :watched="story[1]" />	
			</nuxt-link>
		</div>
		<div v-if="overflowing" class="StoryList__arrow"></div>
	</div> 
</template>

<script>
export default {
	props: {
		stories: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			overflowing: false
		}
	},
}
</script>

<style scoped lang="scss" src="./StoryList.scss"></style>