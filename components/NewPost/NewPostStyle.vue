<template>
	<div class="NewPost" @click.stop>
		<div class="NewPost__modul">
			<div class="NewPost__modul__header">
				<svg aria-label="Back" class="NewPost__modul__header__item" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" @click="prevPage"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
				<h1 class="NewPost__modul__header__item medium bold capital">Crop image</h1>
				<div class="NewPost__modul__header__item action" @click="nextPage">Next</div>
			</div>
			<div class="NewPost__modul__content" @click="closeMenus">
				<div ref="image" class="NewPost__modul__content__imgContainer" :class="selectedRatio">
					<img :style="{transform: `translate(-50%, -50%) scale(${selectedZoom}`}" :src="chosenImage ? chosenImage : require('@/assets/img/loading.gif')" alt="chosen image">
				</div>
			</div>
			<div class="NewPost__modul__buttons">
				<button :class="[showAspectMenu ? activeClass : nonActiveClass]" @click="toggleAspectMenu">
					<svg v-if="showAspectMenu" aria-label="Choose cropout" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 20H4v-6a1 1 0 00-2 0v7a1 1 0 001 1h7a1 1 0 000-2zM20.999 2H14a1 1 0 000 2h5.999v6a1 1 0 002 0V3a1 1 0 00-1-1z"></path></svg>
					<svg v-else aria-label="Choose cropout" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 20H4v-6a1 1 0 00-2 0v7a1 1 0 001 1h7a1 1 0 000-2zM20.999 2H14a1 1 0 000 2h5.999v6a1 1 0 002 0V3a1 1 0 00-1-1z"></path></svg>
				</button>
				<button :class="[showZoomMenu ? activeClass : nonActiveClass]" @click="toggleZoomMenu">
					<svg v-if="showZoomMenu" aria-label="Choose zoom" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M22.707 21.293l-4.825-4.825a9.519 9.519 0 10-1.414 1.414l4.825 4.825a1 1 0 001.414-1.414zM10.5 18.001a7.5 7.5 0 117.5-7.5 7.509 7.509 0 01-7.5 7.5zm3.5-8.5h-2.5v-2.5a1 1 0 10-2 0v2.5H7a1 1 0 100 2h2.5v2.5a1 1 0 002 0v-2.5H14a1 1 0 000-2z"></path></svg>
					<svg v-else aria-label="Choose zoom" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M22.707 21.293l-4.825-4.825a9.519 9.519 0 10-1.414 1.414l4.825 4.825a1 1 0 001.414-1.414zM10.5 18.001a7.5 7.5 0 117.5-7.5 7.509 7.509 0 01-7.5 7.5zm3.5-8.5h-2.5v-2.5a1 1 0 10-2 0v2.5H7a1 1 0 100 2h2.5v2.5a1 1 0 002 0v-2.5H14a1 1 0 000-2z"></path></svg>
				</button>
				<button :class="[showGalleryMenu ? activeClass : nonActiveClass]" @click="toggleGaleryMenu">
					<svg v-if="showGalleryMenu" aria-label="Open media galery" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z" fill-rule="evenodd"></path></svg>
					<svg v-else aria-label="Open media galery" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z" fill-rule="evenodd"></path></svg>
				</button>
			</div>
			<!-- Aspect Ratio Menu -->
			<div v-if="showAspectMenu" class="NewPost__modul__aspectMenu">
				<div id="onetoone" class="NewPost__modul__aspectMenu__item NewPost__modul__aspectMenu__item--active" @click="e => setAspectRatio(e)">
					<p :class="[selectedRatio == 'onetoone' ? 'active bold' : 'bold']">1:1</p>
					<svg v-if="selectedRatio == 'onetoone'" aria-label="Symbol for square" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 23H5a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM5 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path></svg>
					<svg v-else aria-label="Symbol für „Auf Quadrat zuschneiden“" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 23H5a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM5 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path></svg>
				</div>
				<div id="fourtofive" class="NewPost__modul__aspectMenu__item" @click="e => setAspectRatio(e)">
					<p :class="[selectedRatio == 'fourtofive' ? 'active bold' : 'bold']">4:5</p>
					<svg v-if="selectedRatio == 'fourtofive'" aria-label="Symbol für „Auf Hochformat zuschneiden“" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16 23H8a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h8a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM8 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h8a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path></svg>
					<svg v-else aria-label="Symbol for portrait" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16 23H8a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h8a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM8 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h8a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path></svg>
				</div>
				<div id="sixteentonine" class="NewPost__modul__aspectMenu__item" @click="e => setAspectRatio(e)">
					<p :class="[selectedRatio == 'sixteentonine' ? 'active bold' : 'bold']">16:9</p>
					<svg v-if="selectedRatio == 'sixteentonine'" aria-label="Symbol für „Auf Querformat zuschneiden“" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 20H5a4.004 4.004 0 01-4-4V8a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v8a4.004 4.004 0 01-4 4zM5 6a2.002 2.002 0 00-2 2v8a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V8a2.002 2.002 0 00-2-2z"></path></svg>
					<svg v-else aria-label="Symbol for landscape" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 20H5a4.004 4.004 0 01-4-4V8a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v8a4.004 4.004 0 01-4 4zM5 6a2.002 2.002 0 00-2 2v8a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V8a2.002 2.002 0 00-2-2z"></path></svg>
				</div>
			</div>
			<!-- Zoom Menu -->
			<div v-if="showZoomMenu" class="NewPost__modul__zoomMenu">
				<div id="" class="NewPost__modul__zoomMenu__item" >
					<input id="zoomlevel" :value="selectedZoom" min="1" max="2" step=".1" type="range" name="zoomlevel" @input="e => setZoomLevel(e)">
				</div>
			</div>
			<!-- Gallery Menu -->
			<div v-if="showGalleryMenu" class="NewPost__modul__galleryMenu">
				<div id="" class="NewPost__modul__galleryMenu__item" >
					<div class="NewPost__modul__galleryMenu__item__imgContainer" :class="selectedRatio">
						<img :style="{transform: `translate(-50%, -50%) scale(${selectedZoom}`}" :src="chosenImage ? chosenImage : require('@/assets/img/loading.gif')" alt="chosen image">
						<button class="btn btn--round btn--translucent">
							<svg aria-label="delete" color="#ffffff" fill="#ffffff" height="12" role="img" viewBox="0 0 24 24" width="12"><line fill="none" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
						</button>
					</div>
				</div>
				<button class="NewPost__modul__galleryMenu__btn btn btn--round">
					<svg aria-label="Plus-Symbol" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="22" role="img" viewBox="0 0 24 24" width="22"><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
					<input type="file" accept="image/*" class="NewPost__modul__content__item__fileUpload" @change="uploadImage($event)" />
				</button>
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
		},
	},
	data() {
		return {
			activeClass: "btn btn--round btn--translucent--active",
			nonActiveClass: "btn btn--round btn--translucent",
			showAspectMenu: false,
			showZoomMenu: false,
			showGalleryMenu: false,
			selectedRatio: null,
			selectedZoom: null,
		}
	},
	created() {
		this.selectedRatio = this.chosenRatio;
		this.selectedZoom = this.chosenZoom;
 	},
	methods: {
		closeMenus() {
			this.showZoomMenu = false;
			this.showAspectMenu = false;
			this.showGalleryMenu = false;
		},
		toggleAspectMenu() {
			this.showZoomMenu = false;
			this.showGalleryMenu = false;
			this.showAspectMenu = !this.showAspectMenu;
		},
		toggleZoomMenu() {
			this.showAspectMenu = false;
			this.showGalleryMenu = false;
			this.showZoomMenu = !this.showZoomMenu;
		},
		toggleGaleryMenu() {
			this.showAspectMenu = false;
			this.showZoomMenu = false;
			this.showGalleryMenu = !this.showGalleryMenu;
		},
		setAspectRatio(e) {
			this.selectedRatio = e.srcElement.id;
		},
		setZoomLevel(e) {
			this.selectedZoom  = e.srcElement.value;
		},
		uploadImage(e) {
		},
		nextPage() {
			this.$emit("onStyleChosen", {ratio: this.selectedRatio, zoom: this.selectedZoom});
			this.$emit("onNextPage");
		},
		prevPage() {
			this.$emit("onPrevPage");
		}
	}
}
</script>

<style scoped lang="scss" src="./NewPost.scss"></style>