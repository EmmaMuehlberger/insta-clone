const state = () => ({
    currentUser: {
        id: 0,
        name: "emmamuehlberger",
        img: "profile-pic.jpg",
        follows: [1, 2, 3],
        likes: [],
        story: {images: [], time: ""},
        watchedStories: []
    },
    users: [
        {
            id: 0,
            name: "emmamuehlberger",
            fullname: "Emma Mühlberger",
            img: "profile-pic.jpg",
            bio: "",
            story: {images: [], time: ""},
        },
        {
            id: 1,
            name: "tutku.hande",
            fullname: "Tutku Öztoygan",
            img: "profile-pic1.jpg",
            bio: "One life. One world. Explore it as much as you can. ✨✈️🌎",
            story: {images: ["post28.jpg","post34.jpg"], time: "2h"}
        },
        {
            id: 2,
            name: "marie_regenberg",
            fullname: "Marie Regenberg",
            img: "profile-pic3.jpg",
            bio: "| Berlin | '99  | MD-PhD |",
            story: {images: ["post39.jpg"], time: "14h"}
        },
        {
            id: 3,
            name: "ahua",
            fullname: "Ahu Azarina",
            img: "profile-pic2.jpg",
            bio: "🇩🇪 🇮🇷",
            story: {images: ["post38.jpg"], time: "23h"}
        },
        {
            id: 4,
            name: "mpreeetz",
            fullname: "Maximilian Pretz",
            img: "profile-pic4.jpeg",
            bio: "LMU | '94 | 🏂🎓",
            story: {images: [], time: ""}
        },
        {
            id: 5,
            name: "kiboko450",
            fullname: "Kiran B",
            img: "",
            bio: "",
            story: {images: [], time: ""}
        },
        {
            id: 6,
            name: "tomjonas",
            fullname: "Tom Jonas Johanson",
            img: "profile-pic6.webp",
            bio: "Travel | Vanlife | Gratitude",
            story: {images: ["post24.jpg"], time: "23h"}
        },
        {
            id: 7,
            name: "ali081982",
            fullname: "Ali W",
            img: "profile-pic7.jpeg",
            bio: "",
            story: {images: [], time: ""}
        },
        {
            
            id: 8,
            name: "lauraa_rod",
            fullname: "Laura Rodriguez",
            img: "profile-pic8.webp",
            bio: "fashion travel lifestyle 👠✈️",
            story: {images: ["post27.jpg"], time: "14h"}
        },
        {
            
            id: 9,
            name: "wiaquiii",
            fullname: "Memes",
            img: "profile-pic9.png",
            bio: "😂 Funny Memes 😄 Funny Videos 😎 Most relatable page on the gram #memes #memefan #memelover #memiverse",
            story: {images: ["post22.jpg", "post41.webp", "post23.jpg"], time: "23h"}
        },
    ],
    posts: [
        {
            id: 0,
            user: 0,
            img: ["post10.jpg"],
            likes: 157,
            location: "Berlin, Berlin, Germany",
            timesince: "11 months ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique non corrupti quas, voluptates debitis et consequuntur, qui impedit unde placeat quae architecto?",
            comments: []
        },
        {
            id: 1,
            user: 2,
            img: ["post3.jpg", "post25.jpg"],
            likes: 92,
            location: "Paris, France",
            timesince: "11 months ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            comments: [{user: 3, comment: "Soooo beautiful!!!!!!!!!! ♡ ♥", time: "11m"}, {user: 1, comment: "❤❤❤❤❤", time: "11m"}, {user: 0, comment: "WOW!!!!! 😘😘", time: "11m"}, {user: 4, comment: "💖", time: "11m"}]
        },
        {
            id: 2,
            user: 3,
            img: ["post2.jpg"],
            likes: 22,
            location: "Berlin, Berlin, Germany",
            timesince: "3 months ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique!!!!!!!!",
            comments: []
        },
        {
            id: 3,
            user: 2,
            img: ["post26.jpg", "post27.jpg"],
            likes: 47,
            location: "San Francisco, Calinfornia, USA",
            timesince: "1 months ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique non corrupti quas, voluptates debitis et consequuntur, qui impedit unde placeat quae architecto?",
            comments: []
        },
        {
            id: 4,
            user: 8,
            img: ["post4.jpg"],
            likes: 587,
            location: "Berlin, Berlin, Germany",
            timesince: "3 weeks ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique!!!!!!!! Corporis sequi nisi sapiente amet atque blanditiis error similique non corrupti quas, voluptates debitis et consequuntur, qui impedit unde placeat quae architecto?",
            comments: []
        },
        {
            id: 5,
            user: 4,
            img: ["post5.jpg"],
            likes: 64,
            location: "New York City, New York, USA",
            timesince: "3 weeks ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique.",
            comments: []
        },
        {
            id: 6,
            user: 0,
            img: ["post6.jpeg"],
            likes: 43,
            location: "Berlin, Berlin, Germany",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique...",
            comments: []
        },
        {
            id: 7,
            user: 6,
            img: ["post7.webp", "post8.jpg"],
            likes: 868,
            location: "Habanna, Kuba",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique!",
            comments: []
        },
        {
            id: 8,
            user: 0,
            img: ["post1.jpg"],
            likes: 80,
            location: "Mallorca",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit ⛰️🌅",
            comments: []
        },
        {
            id: 9,
            user: 0,
            img: ["post9.jpg"],
            likes: 80,
            location: "Berlin, Berlin, Germany",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.",
            comments: []
        },
        {
            id: 10,
            user: 9,
            img: ["post11.webp"],
            likes: 1198,
            location: "Portugal",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit!",
            comments: []
        },
        {
            id: 11,
            user: 4,
            img: ["post12.jpg", "post13.jpg", "post15.jpg"],
            likes: 958,
            location: "",
            timesince: "2 weeks ago",
            caption: "Lorem ipsum dolor sit!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi nisi sapiente amet atque blanditiis error similique.",
            comments: []
        },
        {
            id: 12,
            user: 8,
            img: ["post14.jpg"],
            likes: 457,
            location: "Kärnten, Austria",
            timesince: "2 weeks ago",
            caption: "Lorem!!!!!!!!!!!",
            comments: []
        },
        {
            id: 13,
            user: 5,
            img: ["post16.webp"],
            likes: 457,
            location: "San José, San José, Costa Rica",
            timesince: "2 weeks ago",
            caption: "",
            comments: []
        },
        {
            id: 14,
            user: 7,
            img: ["post17.png"],
            likes: 317,
            location: "",
            timesince: "1 week ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.",
            comments: []
        },
        {
            id: 15,
            user: 6,
            img: ["post20.jpg"],
            likes: 514,
            location: "",
            timesince: "1 week ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.",
            comments: []
        },
        {
            id: 16,
            user: 6,
            img: ["post21.jpg"],
            likes: 284,
            location: "",
            timesince: "1 week ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.",
            comments: []
        },
        {
            id: 17,
            user: 7,
            img: ["post18.jpg"],
            likes: 799,
            location: "",
            timesince: "1 week ago",
            caption: "",
            comments: []
        },
        {
            id: 18,
            user: 7,
            img: ["post19.webp"],
            likes: 1452,
            location: "",
            timesince: "1 week ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis. Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis. Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.......",
            comments: []
        },
        {
            id: 19,
            user: 9,
            img: ["post22.jpg"],
            likes: 1112,
            location: "",
            timesince: "6 days ago",
            caption: "Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis. Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis. Lorem ipsum dolor sit. Corporis sequi nisi sapiente amet atque blanditiis.......",
            comments: [{user: 7, comment: "wij 🙈😂😂", time: "5d"}, {user: 5, comment: "😂😂😂😂😂😂😂", time: "4d"}]
        },
        {
            id: 20,
            user: 9,
            img: ["post23.jpg"],
            likes: 312,
            location: "",
            timesince: "6 days ago",
            caption: "Lorem ipsum!",
            comments: []
        },
        {
            id: 21,
            user: 6,
            img: ["post24.jpg"],
            likes: 467,
            location: "Ahuachapan, El Salvador",
            timesince: "6 days ago",
            caption: "Lorem ipsum equi nisi sapiente amet.",
            comments: []
        },
        {
            id: 22,
            user: 6,
            img: ["post28.jpg", "post32.jpg", "post33.jpg"],
            likes: 1267,
            location: "Fuerteventura, Costa Rica",
            timesince: "5 days ago",
            caption: "Lorem ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet.",
            comments: []
        },
        {
            id: 23,
            user: 8,
            img: ["post29.jpg", "post31.jpg"],
            likes: 744,
            location: "Hamburg, Hamburg, Germany",
            timesince: "4 days ago",
            caption: "Lorem ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi.....",
            comments: []
        },
        {
            id: 24,
            user: 9,
            img: ["post30.jpg"],
            likes: 153,
            location: "",
            timesince: "3 days ago",
            caption: "",
            comments: []
        },
        {
            id: 25,
            user: 1,
            img: ["post36.jpg"],
            likes: 279,
            location: "Grenada, Spain",
            timesince: "3 days ago",
            caption: "Lorem ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet.",
            comments: []
        },
        {
            id: 26,
            user: 1,
            img: ["post34.jpg", "post35.webp"],
            likes: 165,
            location: "Barcelona, Spain",
            timesince: "1 day ago",
            caption: "Lorem ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet ipsum equi nisi sapiente amet.",
            comments: []
        },
        {
            id: 27,
            user: 3,
            img: ["post37.jpg"],
            likes: 314,
            location: "Berlin, Berlin, Germany",
            timesince: "1 day ago",
            caption: "Lorem ipsum equi nisi 🥳🥳🥳🥳",
            comments: []
        },
    ],
    newPostImages: []
});

const getters = {
    // Stories
    getStories: (state) => {
        const users = [];
        const tempUsers = state.users.filter(user => state.currentUser.follows.includes(user.id) && user.story.images.length > 0);
        tempUsers.forEach(user => {
            if(state.currentUser.watchedStories.includes(user.id)) {
                users.push([user, true]);
                return;
            }
            users.push([user, false]);
        });
        users.sort(function(a,b){return a[1]-b[1]});
        return users;
    },
    getStoriesByUser: (state) => (userId) => {
        return state.users.filter(user => user.id.toString() === userId.toString() && user.story.images.length > 0);
    },
    getPrevAndNextStory: (state) => (currentStory) => {
        const currentStoryIndex = state.currentUser.follows.indexOf(currentStory);
        const prevStory = currentStoryIndex > 0 ? state.currentUser.follows[currentStoryIndex - 1] : state.currentUser.follows[state.currentUser.follows.length - 1];
        const nextStory = currentStoryIndex < state.currentUser.follows.length - 1 ? state.currentUser.follows[currentStoryIndex + 1] : state.currentUser.follows[0];
        return  [prevStory, nextStory];
    },

    // Posts
    getPosts: (state) => {
        let story = false;
        const users = [];
        state.posts.forEach(post => {
            if(state.userStories.includes(post.id)) {
                story = true;
            }
            users.push([state.users.filter(user => post.user === user.id), story]);
            story = false;
        });
        return [state.posts, users]; 
    },
    getSinglePost: (state) => (postId) => {
        return state.posts.filter(post => post.id.toString() === postId.toString());
    },
    getExplorePosts: (state) => {
        return state.posts.filter(post => post.user.toString() !== state.currentUser.id.toString() && !state.currentUser.follows.includes(post.user));
    },
    getPostsByUser: (state) => (userId) => {
        return state.posts.filter(post => post.user.toString() === userId.toString());
    },
    getSubscribedPosts: (state) => {
        return state.posts.filter(post => state.currentUser.follows.includes(post.user));
    },

    // User
    getUsers: (state) => {
        return state.users;
    },
    getCurrentUser: (state) => {
        return state.currentUser;
    },
    getRecommendedUsers: (state) => {
        return state.users.filter(item => !state.currentUser.follows.includes(item.id) && item.id !== state.currentUser.id);
    },
    getSingleUser: (state) => (id) => {
        return state.users.filter(user => user.id.toString() === id.toString());
    },
    getSubscribedUsers: (state) => {
        return state.users.filter(user => state.currentUser.follows.includes(user.id));
    },

    // New Post
    getNewPostImages: (state) => {
        return state.newPostImages;
    },

}

const mutations = {
    // Likes
    likePost(state, postId) {
        state.currentUser.likes = [...state.currentUser.likes, postId];
    },
    unlikePost(state, postId) {
        state.currentUser.likes = state.currentUser.likes.filter(like => like !== postId);
    },
    incrementLikes(state, postId) {
        state.posts[postId].likes++;
    },
    decrementLikes(state, postId) {
        state.posts[postId].likes--;
    },

    // Following
    startFollowing(state, userId) {
        state.currentUser.follows = [...state.currentUser.follows, userId];
    },
    stopFollowing(state, userId) {
        state.currentUser.follows = state.currentUser.follows.filter(user => user !== userId);
    },

    // Comments
    addComment(state, { postId, content }) {
        state.posts[postId].comments.push({user: state.currentUser.id, comment: content, time: "1m"});
    },

    // Stories
    addWatchedStory(state, userId) {
        state.currentUser.watchedStories = !state.currentUser.watchedStories.includes(userId) ? [...state.currentUser.watchedStories, userId] : state.currentUser.watchedStories;
    }
}

export default {
    state,
    mutations,
    getters,
}
  