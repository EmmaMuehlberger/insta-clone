<template>
    <div class="Story">
        <AccountWithStory :img="storyImg" :alt="storyName" />
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
    }
}
</script>

<style scoped lang="scss" src="./StoryPreview.scss"></style>