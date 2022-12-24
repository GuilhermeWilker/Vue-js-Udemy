<template>
  <h3>Hey you!</h3>

  <Greeting :age="age"></Greeting>

  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></User>
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
