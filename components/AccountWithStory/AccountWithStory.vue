<template>
	<div class="AccountWithStory" :class="{watched: watched}">
		<img :src="require(`@/assets/img/${img ? img : 'avatar-placeholder.png'}`)" :alt="alt" >
	</div>
</template>

<script>
export default {
	props: { 
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