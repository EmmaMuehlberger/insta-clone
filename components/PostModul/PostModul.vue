<template>
	<div class="PostModulOverlay" @click="closeModul">
		<div class="PostModul" @click.stop>
			<p class="PostModul__item alert bold">Report</p>
			<p class="PostModul__item alert bold">Stop following</p>
			<p class="PostModul__item">View Post</p>
			<p class="PostModul__item">Share in ...</p>
			<p class="PostModul__item">Copy link</p> 
			<p class="PostModul__item">Embed</p> 
			<p class="PostModul__item">Cancel</p> 
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModul() {
			this.$emit("onCloseModul");
		}
	}
}
</script>

<style scoped lang="scss" src="./PostModul.scss"></style>