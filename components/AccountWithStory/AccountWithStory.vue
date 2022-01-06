<template>
	<div class="AccountWithStory" :class="{watched: watched}">
        <nuxt-link :to="`/stories/${id}`">
		    <img :src="require(`@/assets/img/${img ? img : 'avatar-placeholder.png'}`)" :alt="alt" >
        </nuxt-link>
	</div>
</template>

<script>
export default {
	props: { 
        id: {
            type: String,
            default: ""
        }, 
        img: {
            type: String,
            default: ""
        }, 
		alt: {
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

<style scoped lang="scss" src="./AccountWithStory.scss"></style>