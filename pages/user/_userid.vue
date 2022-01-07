<template>
	<div class="Page Page__main ProfilePage">
		<div class="ProfilePage__header">
			<AccountWithNoStory :img="user.img" :alt="`${user.name}'s profile pic`" />
			<div class="ProfilePage__header__content">
				<div class="ProfilePage__header__content__row">
					<h1 class="title3">{{user.name}}</h1>
					<button v-if="currentUser.id == user.id" class="btn btn--light">Edit profile</button>
					<svg v-if="currentUser.id == user.id"  aria-label="Optionen" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="rgb(38, 38, 38)" stroke-linejoin="round" stroke-width="2"></path></svg>
					<button v-if="currentUser.id !== user.id" class="btn btn--light">Message</button>
					<button v-if="currentUser.id !== user.id && currentUser.follows.includes(user.id)" class="btn btn--light btn--wide" :class="{'hideContent': fadeAnimation}" @click="unfollowUser">
						<span class="bold white">i</span>
						<img src="@/assets/img/stopfollowing1.png" alt="stop following symbol">
					</button>
					<button v-if="currentUser.id !== user.id && !currentUser.follows.includes(user.id)" class="btn btn--light btn--wide" :class="{'hideContent': fadeAnimation}" @click="followUser">
						<img src="@/assets/img/startfollowing.png" alt="start following symbol">
						<span class="bold">Follow</span>
					</button>
					<svg v-if="currentUser.id !== user.id" aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
				</div>
				<div class="ProfilePage__header__content__row">
					<p class="medium"><strong class="medium bold">{{posts.length}}</strong> Posts</p>
					<p class="medium"><strong class="medium bold">78</strong> Followers</p>
					<p class="medium"><strong class="medium bold">65</strong> Following</p>
				</div>
				<div class="ProfilePage__header__content__row">
					<h2 class="medium bold">{{user.fullname}}</h2>
				</div>
				<div class="ProfilePage__header__content__row">
					<p>{{user.bio}}</p>
				</div>
			</div>
		</div>
		<div class="ProfilePage__postContainer">
			<nav class="ProfilePage__postContainer__navbar">
				<ul>
					<li :class="{active: navPosition === 0}" @click="changeNavPos(0)">
						<svg v-if="navPosition === 0" aria-label="grid symbol" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="rgb(38, 38, 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
						<svg v-else aria-label="grid symbol" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="#8e8e8e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="#8e8e8e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="#8e8e8e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="#8e8e8e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="#8e8e8e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
						<span class="verySmall grey upper">Posts</span>
					</li>
					<li :class="{active: navPosition === 1}" @click="changeNavPos(1)">
						<svg v-if="navPosition === 1" aria-label="play button" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path></svg>
						<svg v-else aria-label="play button" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path></svg>
						<span class="verySmall grey upper">Videos</span>
					</li>
					<li :class="{active: navPosition === 2}" @click="changeNavPos(2)">
						<svg v-if="navPosition === 2" aria-label="bookmar" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
						<svg v-else aria-label="bookmark" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="rgb(142, 142, 142)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
						<span class="verySmall grey upper">Saved</span>
					</li>
					<li :class="{active: navPosition === 3}" @click="changeNavPos(3)">
						<svg v-if="navPosition === 3" aria-label="nametag" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
						<svg v-else aria-label="nametag" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="rgb(142, 142, 142)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="rgb(142, 142, 142)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="rgb(142, 142, 142)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
						<span class="verySmall grey upper">Tagged</span>
					</li>
				</ul>
			</nav>
			<div v-if="navPosition === 0" class="ProfilePage__postContainer__postGrid">
				<GeneralPost v-for="post in posts.slice().reverse()" :key="post.id" :post-id="post.id.toString()" :img="post.img" :img-count="post.img.length" />
			</div>
			<div v-if="navPosition === 1" class="ProfilePage__postContainer__navItem">
				<div class="ProfilePage__postContainer__navItem__img ProfilePage__postContainer__navItem__videoImg"></div>
				<h3 class="title3">Your videos</h3>
				<p>When you post videos, they'll appear here.</p>
			</div>
			<div v-if="navPosition === 2" class="ProfilePage__postContainer__navItem">
				<div class="ProfilePage__postContainer__navItem__img ProfilePage__postContainer__navItem__saveImg"></div>
				<h3 class="title3">Save</h3>
				<p>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
			</div>
			<div v-if="navPosition === 3" class="ProfilePage__postContainer__navItem">
				<div class="ProfilePage__postContainer__navItem__img ProfilePage__postContainer__navItem__tagImg"></div>
				<h3 class="title3">Photos of you</h3>
				<p>When people tag you in photos, they'll appear here.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentUser: null,
			userid: this.$route.params.userid,
			user: null,
			posts: [],
			navPosition: 0,
			fadeAnimation: false
		}
	},
	head() {
		return {
			title: this.user ? `${this.user.fullname} (@${this.user.name}) • Instagram Profile Page` : "Instagram Profile Page"
		}
	},
	created() {
		this.currentUser = this.$store.getters.getCurrentUser;
		this.user = this.$store.getters.getSingleUser(this.userid)[0];
		this.posts = this.$store.getters.getPostsByUser(this.userid);
	},
	methods: {
		changeNavPos(index) {
			this.navPosition = index;
		},
		followUser() {
			this.fadeAnimation = true;
			setTimeout(() => {
				this.fadeAnimation = false;
			}, 100);
			this.$store.commit("startFollowing", Number(this.userid));
		},
		unfollowUser() {
			this.fadeAnimation = true;
			setTimeout(() => {
				this.fadeAnimation = false;
			}, 150);
			this.$store.commit("stopFollowing", Number(this.userid));
		}
	}
}
</script>

<style scoped lang="scss" src="./ProfilePage.scss"></style>