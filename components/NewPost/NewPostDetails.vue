<template>
  	<div class="NewPost" @click.stop>
		<div class="NewPost__modul NewPost__modul--extraWidth">
			<div class="NewPost__modul__header">
				<svg aria-label="Back" class="NewPost__modul__header__item" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" @click="prevPage"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
				<h1 class="NewPost__modul__header__item medium bold capital">Create new post</h1>
				<div class="NewPost__modul__header__item action" @click="$router.push('/')">Publish</div>
			</div>
			<div class="NewPost__modul__content">
				<div ref="image" class="NewPost__modul__content__imgContainer" :class="chosenRatio">
					<img :style="{transform: `translate(-50%, -50%) scale(${chosenZoom}`}" :src="chosenImage ? chosenImage : require('@/assets/img/loading.gif')" alt="chosen image">
				</div>
				<div class="NewPost__modul__content__details">
					<div class="NewPost__modul__content__details__account">
						<AccountWithNoStory img="profile-pic.jpg" img-alt="user prile pic" />
						<p class="medium bold">emmamuehlberger</p>
					</div>
					<div class="NewPost__modul__content__details__caption">
						<textarea id="caption" v-model="caption" name="caption" placeholder="Write a caption ..." maxlength="2200" @keyup="charCount"></textarea>
						<div class="NewPost__modul__content__details__caption__menu">
							<svg aria-label="Emoji" color="#8e8e8e" fill="#8e8e8e" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
							<p class="grey extraSmall">{{captionChars}}/2.200</p>
						</div>
					</div>
					<div class="NewPost__modul__content__details__meta">
						<input type="text" placeholder="Add location">
						<svg aria-label="Add location" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M12.053 8.105a1.604 1.604 0 101.604 1.604 1.604 1.604 0 00-1.604-1.604zm0-7.105a8.684 8.684 0 00-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 001.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0012.053 1zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0113.417 0c0 3.985-3.944 8.538-6.709 11.002z"></path></svg>
					</div>
					<div class="NewPost__modul__content__details__meta">
						<span>Accessability</span>
						<svg aria-label="arrow down" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
					</div>
					<div class="NewPost__modul__content__details__meta">
						<span>Additional settings</span>
						<svg aria-label="arrow down" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		chosenImage: {
			type: String,
			default: null
		},
		chosenZoom: {
			type: Number,
			default: 1
		},
		chosenRatio: {
			type: String,
			default: "onetoone"
		}
	},
	data() {
		return {
			captionChars: 0
		}
	},
	methods: {
		nextPage() {
			this.$emit("onNextPage");
		},
		prevPage() {
			this.$emit("onPrevPage");
		},
		charCount() {
			this.captionChars = this.caption.length;
		}
	}
}
</script>

<style scoped lang="scss" src="./NewPost.scss"></style>