<template>
	<div class="AccountWithNoStory">
        <nuxt-link :to="`/user/${id}`">
		    <img :src="require(`@/assets/img/${img ? img : 'avatar-placeholder.jpg'}`)" :alt="alt">
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
        }
    }	
}
</script>

<style scoped lang="scss" src="./AccountWithNoStory.scss"></style>