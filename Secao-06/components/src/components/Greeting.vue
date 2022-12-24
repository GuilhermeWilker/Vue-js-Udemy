<template>
  <h1 v-if="age > 25">{{ msg }}</h1>
  <h2 v-else>You must be 25 years or older to view this message</h2>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped lang="scss">
h1:hover {
  color: darken(#cc4444, 15%);
}

h2 {
  color: red;
}
</style>
