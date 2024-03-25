const app = Vue.createApp({
    data() {
        return {
            firstInputTxt : ''
            , enteredTxt : ''
        };
    },
    methods: {
        showAlert(){
            alert('흐하하하하');
        },
        inputTxt(event) {
            this.firstInputTxt = event.target.value;
        },
        inputEnterKeyEvent(event) {
            this.enteredTxt = event.target.value;
        }
    }
});

app.mount('#assignment');


