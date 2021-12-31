<template>
	<div class="AccountWithNoStory">
		<img :src="require(`@/assets/img/${img ? img : 'avatar-placeholder.jpg'}`)" :alt="alt">
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
        }
    }	
}
</script>

<style scoped lang="scss" src="./AccountWithNoStory.scss"></style>