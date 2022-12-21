const vm = Vue.createApp({
  data() {
    return {
      firstName: "Guilherme",
      middleName: "",
      lastName: "Wilker",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, e) {
      // console.log(msg);
      this.lastName = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("A função fullName computed propery foi chamada");

      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Bob";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Carolina",
//       lastName: "Santos",
//     };
//   },
// }).mount("#app2");
