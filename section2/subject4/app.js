const app = Vue.createApp({
    data () {
        return {
            firstUser : '',
            secondUser : '',
            isHidden : false,
            inputColor: ''
        };
    },
    watch: {
        firstUser() {
        },
        inputColor() {
        }
    }
    , methods : {
        toggleButton() {
            this.isHidden = !this.isHidden;
        }
    }
});

app.mount('#assignment')

