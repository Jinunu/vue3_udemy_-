const app = Vue.createApp({
    data() {
        return {
            courseGoalA : 'Vue 강의 끝내기!',
            courseGoalB : 'Vue 마스터 후 멋진 앱 만들기!',
            vueLink: 'https://ko.vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');