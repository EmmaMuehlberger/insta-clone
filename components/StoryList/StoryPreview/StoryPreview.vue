<template>
    <div class="Story">
        <AccountWithStory :img="storyImg" :alt="storyName" :watched="watched" />
        <p class="verySmall">{{storyName.slice(0, 10)}}<span v-if="storyName.length > 10">...</span></p>
    </div>
</template>

<script>
export default {
    props: {
        storyName: {
            type: String,
            default: ""
        }, 
        storyImg: {
            type: String,
            default: ""
        },
        watched: {
            type: Boolean,
            default: false
        } 
    }
}
</script>

<style scoped lang="scss" src="./StoryPreview.scss"></style>