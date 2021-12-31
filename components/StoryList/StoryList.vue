<template>
	<div ref="storyList" class="StoryList" :v-if="stories.length > 0">
		<div v-for="story in stories" :key="story.name" class="StoryList__container">
			<StoryPreview :story-name="story.name" :story-img="story.img" />	
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
	}
}
</script>

<style scoped lang="scss" src="./StoryList.scss"></style>