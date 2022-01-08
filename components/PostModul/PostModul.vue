<template>
	<div class="PostModulOverlay" @click="closeModul">
		<div class="PostModul" @click.stop>
			<p v-if="prompt" class="PostModul__header">{{prompt}}</p>
			<p v-for="field in fields" :key="field.content" class="PostModul__item" :class="{'alert bold': field.bold}" v-on="field.action ? { click: unfollowUser } : {}">{{field.content}}</p>
			<p class="PostModul__item" @click="closeModul">Cancel</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		prompt: {
			type: String,
			default: null
		},
		fields: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		closeModul() {
			this.$emit("onCloseModul");
		},
		unfollowUser() {
			this.$emit("onUnfollow");
		}
	}
}
</script>

<style scoped lang="scss" src="./PostModul.scss"></style>