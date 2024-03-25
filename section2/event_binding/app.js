const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        }
        ,
        submitForm(event) {
            // event.preventDefault();
            alert('Submitted!');
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        // setName(event)  {
        //   this.name = event.target.value;
        // }
        setName(event, addWord) {
            this.name = event.target.value + ' ' + addWord;
        }

    }
});

app.mount('#events');
