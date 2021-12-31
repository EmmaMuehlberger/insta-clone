<template>
	<div class="Page Page__create" @click="goToPrev()">
		<svg class="Page__create__close" aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
		<NewPostSelect v-if="pageIndex==0" @onNextPage="nextPage" @onUpload="uploadFile" />
		<NewPostStyle v-else-if="pageIndex==1" :chosen-image="chosenImage" :chosen-zoom="chosenZoom" :chosen-ratio="chosenRatio" @onStyleChosen="setImageStyles" @onPrevPage="prevPage" @onNextPage="nextPage" />
		<NewPostDetails v-else-if="pageIndex==2" :chosen-image="chosenImage" :chosen-zoom="chosenZoom" :chosen-ratio="chosenRatio" @onPrevPage="prevPage" @onNextPage="nextPage" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			pageIndex: 0,
			chosenImage: null,
			chosenZoom: 1,
			chosenRatio: "onetoone"
		}
	},
	head() {
		return {
			title: "Create new post • Instagram"
		}
	},
	methods: {
		goToPrev() {
			this.$router.go(-1);
		},
		prevPage() {
			this.pageIndex--;
		},
		nextPage() {
			this.pageIndex++;
		},
		setImageStyles(styles) {
			this.chosenZoom = styles.zoom;
			this.chosenRatio = styles.ratio;
		},
		async uploadFile(currentFile) {
			this.chosenImage = null;

			const file = currentFile;

			/* Make sure file exists */
			if (!file) return;

			/* create a reader */
			const readData = (f) =>  new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.readAsDataURL(f);
			});

			/* Read data */
			const data = await readData(file);

			/* upload the converted data */
			// eslint-disable-next-line no-unused-vars
			const instance = await this.$cloudinary.upload(data, {
				folder: 'instagram',
				uploadPreset: 'o6cs0arc'
			}).then(async (response) => { 
				this.$store.commit("updateNewPostImages", [response.public_id + "." + response.format]);
				this.chosenImage = await this.$cloudinary.image.url(`https://res.cloudinary.com/dq9y6cryw/image/upload/v1640722964/${[response.public_id + "." + response.format]}`);
			});
		},
	}
}
</script>

<style lang="scss" scoped>
.Page {
	&__create {
		&__close {
			position: fixed;
			top: 10px;
			right: 10px;
			color: #ffffff;
			cursor: pointer;
		}
	}
}
</style>