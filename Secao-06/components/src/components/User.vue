<template>
  <button @click="onClickAge">update Age</button>
  <button @click="ageChangeFn(3)">update Age CB</button>
  <p>The user is {{ age }} years old!</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 20,
      validator(value) {
        // this.onClickAge();
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
