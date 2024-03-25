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
       calculateAge(){
           return this.age + 5;
       },
       calculateRandom() {
          return Math.random();
       }
   }
});

app.mount('#assignment');
