<template>
	<div class="HomePost">
		<div class="HomePost__header">
			<AccountWithStory v-if="user.story" :img="user.img" :alt="user.name" />
			<AccountWithNoStory v-else :img="user.img" :alt="user.name" />
			<nuxt-link :to="`/user/${user.id}`">
				<p class="bold">{{user.name}}</p>
				<p class="verySmall grey">{{post.location}}</p>
			</nuxt-link>
			<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" @click="showOptions"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
		</div>
		<div class="HomePost__img">
			<img :src="require(`@/assets/img/${post.img[currentImgIndex]}`)" :alt="`${user.name}'s post`">
			<div v-if="post.img.length > 1 && currentImgIndex > 0" class="HomePost__img__arrow HomePost__img__arrow--left" @click="prevImg"></div>
			<div v-if="post.img.length > 1 && currentImgIndex < post.img.length - 1" class="HomePost__img__arrow HomePost__img__arrow--right" @click="nextImg"></div>
		</div>
		<div class="HomePost__footer">
			<div class="HomePost__footer__icons">
				<!-- Like -->
				<svg v-if="!liked" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" @click="likeThisPost"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
				<!-- Don't like anymore -->
				<svg v-else aria-label="Unlike" class="HomePost__footer__icons__likeIcon" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24" @click="unlikeThisPost"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
				<!-- Comment -->
				<svg aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
				<!-- Share -->
				<svg aria-label="Share post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
				<!-- Save -->
				<svg aria-label="Save post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
			</div>
			<p class="HomePost__footer__likes">Liked {{post.likes}} times</p>
			<p class="HomePost__footer__caption"><span class="HomePost__footer__caption__username">{{user.name}}</span> {{post.caption.slice(0, 70)}}<span v-if="post.caption.length > 70">......<span class="light"> mehr</span></span></p>
		</div>
		<div class="HomePost__commentSection">
			<p v-for="(comment, index) in post.comments.slice().reverse().slice(0, 2).reverse()" :key="index"><strong class="bold">{{getUser(comment.user).name}}</strong> {{comment.comment}}</p>
			<p class="grey extraSmall upper">{{post.timesince}}</p>
		</div>
		<div class="HomePost__comment">
			<svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
			<div class="HomePost__comment__input">
				<input v-model="commentInput" type="text" placeholder="Comment ..." @keyup.enter="postComment">
			</div>	
			<button class="action" :class="{'disabled': commentInput.length === 0}" @click="postComment">Post</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
        post: {
            type: Object,
            default: () => {}
        }, 
        user: {
			type: Object,
			default: () => {}
		}
    },
	data() {
		return {
			currentImgIndex: 0,
			currentUser: null,
			liked: false,
			commentInput: ""
		}
	},
	created() {
		this.currentUser = this.$store.getters.getCurrentUser;
		this.liked = this.currentUser ? this.currentUser.likes.includes(Number(this.post.id)) : false;
	},
	methods: {
		showOptions() {
			this.$emit("onPostOptions");
		},
		nextImg() {
			if(this.currentImgIndex <= this.post.img.length - 1) {
				this.currentImgIndex++;
			}
		},
		prevImg() {
			if(this.currentImgIndex >= 1) {
				this.currentImgIndex--;
			}
		},
		likeThisPost() {
			this.$store.commit("likePost", Number(this.post.id));
			this.$store.commit("incrementLikes", Number(this.post.id));
			this.liked = this.currentUser ? this.currentUser.likes.includes(Number(this.post.id)) : false;
			
		},
		unlikeThisPost() {
			this.$store.commit("unlikePost", Number(this.post.id));
			this.$store.commit("decrementLikes", Number(this.post.id));
			this.liked = this.currentUser ? this.currentUser.likes.includes(Number(this.post.id)) : false;
		},
		getUser(id) {
			return this.$store.getters.getSingleUser(id)[0];
		},
		postComment() {
			if(this.commentInput.length > 0) {
				this.$store.commit("addComment", {postId: this.post.id, content: this.commentInput});
				this.commentInput = "";
			}
		}
	}
}
</script>

<style scoped lang="scss" src="./HomePost.scss"></style>