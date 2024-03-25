const app = Vue.createApp({
    data() {
        return {
            courseGoal : 'Vue 강의 끝내기!',
            vueLink: 'https://ko.vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!'
            }
        }
    }
});

app.mount('#user-goal');