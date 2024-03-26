const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      console.log('재실행');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + '크하하하';
    }
  },
  methods: {
    outputFullname() {
      console.log('재실행');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + '크하하하';
    },
    setName(event) {법
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },

  }
});

app.mount('#events');
