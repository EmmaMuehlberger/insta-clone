<template>
	<div class="Page StoryPage">
		<nuxt-link v-if="prevUser" :to="`/stories/${prevUser.id}`" class="StoryPage__previewContainer">
			<div class="StoryPage__previewContainer__preview" :style="{backgroundImage: `url(${require(`@/assets/img/${prevUser.img}`)})`}"></div>
			<AccountWithNoStory :img="prevUser.img" :alt="`${prevUser.name}s profile pic`" />
		</nuxt-link>
		<div v-else class="StoryPage__placeholder"></div>
		<div class="StoryPage__container">
			<div class="StoryPage__container__background" :style="{backgroundImage: `url(${require(`@/assets/img/${stories.images[currentStoryIndex]}`)})`}"></div>
			<div class="StoryPage__container__header">
				<div class="StoryPage__container__header__progressBar">
					<div v-for="(image, index) in stories.images" :key="image" class="StoryPage__container__header__progressBar__container">
						<div class="StoryPage__container__header__progressBar__container__complete"></div>
						<div v-if="index == currentStoryIndex" class="StoryPage__container__header__progressBar__container__current" :style="{width: `${currentProgress}%`}"></div>
						<div v-else-if="index > currentStoryIndex" class="StoryPage__container__header__progressBar__container__current" :style="{width: '0%'}"></div>
						<div v-else-if="index < currentStoryIndex" class="StoryPage__container__header__progressBar__container__current" :style="{width: '100%'}"></div>
					</div>
				</div>
				<div class="StoryPage__container__header__content">
					<div class="StoryPage__container__header__content__user">
						<AccountWithNoStory :id="user.id.toString()" :img="user.img" :alt="`${user.name}'s profile pic`" />
						<h1 class="bold smallMedium">{{user.name}}</h1>
						<p class="smallMedium bold">{{stories.time}}</p>
					</div>
					<div class="StoryPage__container__header__content__icons">
						<svg v-if="playing" aria-label="Pause" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 48 48" width="16" @click="stopCountDown"><path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"></path></svg>
						<svg v-else aria-label="Play" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16" @click="startCountDown"><path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path></svg>
						<svg aria-label="Video has no audio" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M11.403 1.083a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917zM20.704 12l1.94-1.94a1.5 1.5 0 00-2.122-2.12l-1.939 1.939-1.94-1.94a1.5 1.5 0 10-2.12 2.122L16.461 12l-1.94 1.94a1.5 1.5 0 102.122 2.12l1.939-1.939 1.94 1.94a1.5 1.5 0 002.12-2.122z"></path></svg>
						<svg aria-label="Menu" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z" fill-rule="evenodd"></path></svg>
					</div>
				</div>
			</div>
			<img :src="require(`@/assets/img/${stories.images[currentStoryIndex]}`)" :alt="`${user.name}'s story`" class="StoryPage__container__mainImg">
			<div class="StoryPage__container__comment">
				<input v-model="commentInput" type="text" :placeholder="`Reply to ${user.name} ...`" @keyup.enter="commentInput = ''">
				<svg aria-label="Direct" color="#dbdbdb" fill="#dbdbdb" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="#ffffff" stroke-linejoin="round" stroke-width="2"></polygon></svg>
			</div>
		</div>
		<nuxt-link v-if="nextUser" :to="`/stories/${nextUser.id}`" class="StoryPage__previewContainer">
			<div class="StoryPage__previewContainer__preview" :style="{backgroundImage: `url(${require(`@/assets/img/${nextUser.img}`)})`}"></div>
			<AccountWithNoStory :img="nextUser.img" :alt="`${nextUser.name}s profile pic`" />
		</nuxt-link>
		<div v-else class="StoryPage__placeholder"></div>
	</div>
</template>

<script>
export default {
	layout: "story",
	data() {
		return {
			user: {},
			stories: {},
			currentProgress: 0,
			countDownInterval: () => {},
			playing: true,
			currentStoryIndex: 0,
			prevUser: null,
			nextUser: null,
		}
	},
	head() {
		return {
			title: "Stories • Instagram"
		}
	},
	created() {
		const data = this.$store.getters.getStoriesByUser(this.$route.params.user)[0];
		this.user = {id: data.id, name: data.name, img: data.img};
		this.stories = data.story;
	},
	mounted() {
		// start timer
		this.countDownStory();

		// load data for prev and next story
		const data = this.$store.getters.getPrevAndNextStory(this.user.id);
		const prevUser = data[0];
		const nextUser = data[1];
		this.prevUser = prevUser;
		this.nextUser = nextUser;
	},
	beforeDestroy() {
		clearInterval(this.countDownInterval);
	},
	methods: {
		countDownStory() {
			const countDown = () => {
				if (this.currentProgress >= 100) {
					if(this.currentStoryIndex + 1 >= this.stories.images.length) {
						this.$store.commit("addWatchedStory", Number(this.user.id));
						clearInterval(this.countDownInterval);
						this.$router.push(`/stories/${this.nextUser.id}`);
						return;
					} 
					this.currentStoryIndex++;
					this.currentProgress = 0;
				} else {
					this.currentProgress++;
				}
			}
			
			this.countDownInterval = setInterval(countDown, 50);
		},
		startCountDown() {
			this.playing = true;
			this.countDownStory();
		},
		stopCountDown() {
			this.playing = false;
			clearInterval(this.countDownInterval);
		},
	}
}
</script>

<style scoped lang="scss" src="./StoryPage.scss"></style>