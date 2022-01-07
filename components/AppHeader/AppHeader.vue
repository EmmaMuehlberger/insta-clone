<template>
    <header class="Header">
        <div class="Header__content">
            <nuxt-link to="/">
                <div class="Header__content__logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
                </div>
            </nuxt-link>
            <div class="Header__content__search">
                <input type="text" placeholder="Search">
                <img src="@/assets/img/lupe.png" alt="magnifying glass">
            </div>
            <div class="Header__content__icons">
                <!-- Home -->
                <nuxt-link to="/">
                    <svg v-if="$route.path == '/' && !showAccountMenu && !showActivityFeed" aria-label="Home" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
                    <svg v-else aria-label="home" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </nuxt-link>
                <!-- DMs -->
                <nuxt-link to="/direct">
                    <svg v-if="$route.path == '/direct' && !showAccountMenu && !showActivityFeed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692" fill-rule="evenodd"></path></svg>
                    <svg v-else aria-label="Direct" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </nuxt-link>
                <!-- New Post -->
                <nuxt-link to="/create">
                    <svg v-if="$route.path.includes('create') && !showAccountMenu && !showActivityFeed" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12V15.45C2 18.299 2.698 19.455 3.606 20.394C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.302 20.394 20.394C21.302 19.455 22 18.3 22 15.45V8.552C22 5.703 21.302 4.546 20.394 3.607C19.454 2.7 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.547 2 5.703 2 8.552V12Z" fill="#262626" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.003 6.545V17.455" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.545 12.001H17.455" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <svg v-else aria-label="New Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                </nuxt-link>
                <!-- Explore -->
                <nuxt-link to="/explore">
                    <svg v-if="$route.path == '/explore' && !showAccountMenu && !showActivityFeed" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 22.505C17.8 22.505 22.501 17.804 22.501 12.005C22.501 6.20601 17.8 1.505 12.001 1.505C6.20202 1.505 1.50101 6.20601 1.50101 12.005C1.50101 17.804 6.20202 22.505 12.001 22.505Z" fill="#262626" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.941 13.953L7.58099 16.424L10.06 10.056L16.42 7.585L13.941 13.953Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.06 10.056L13.949 13.945L7.58099 16.424L10.06 10.056Z" fill="white"/></svg>
                    <svg v-else aria-label="Explore" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                </nuxt-link>
                <!-- Activity Feed -->
                <svg v-if="showActivityFeed" aria-label="Activity Feed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24" @click="toggleFeed"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                <svg v-else aria-label="Activity Feed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" @click="toggleFeed"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <!-- Personal Account -->
                <img :class="{active: showAccountMenu || $route.path == `/user/${currentUser.toString()}`}" src="@/assets/img/profile-pic.jpg" alt="personal account profile pic" @click="toggleMenu">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        showAccountMenu: {
            type: Boolean,
            default: false
        },
        showActivityFeed: {
            type: Boolean,
            default: false
        },
        currentUser: {
            type: Number,
            default: 0
        }
    },
    methods: {
        toggleMenu() {
            this.$emit("onProfileClicked");
		},
        toggleFeed() {
            this.$emit("onFeedClicked");
		}
    }
}
</script>

<style scoped lang="scss" src="./AppHeader.scss"></style>