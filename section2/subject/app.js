const app = Vue.createApp({
    data() {
        return {
            name : 'NOH JINWOO',
            inputName : '',
            age : 29,
            imgLink : 'https://img.freepik.com/free-photo/cute-small-puppy-of-corgi-dog-calmly-posing-isolated-over-white-studio-background-looks-happy_155003-46197.jpg'

        };
    },
   methods: {
        displayRandomNumber(){
            if (Math.random() < 0.5){
                return 0;
            } else {
                return 1;
            }
        },
       changeName() {
          this.name = this.inputName;
       }
   }
});

app.mount('#assignment');
