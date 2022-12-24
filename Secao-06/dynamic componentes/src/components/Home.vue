<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log("Home Component unmounted");
  },
  activated() {
    console.log("Home Component activated");
  },
  deactivated() {
    console.log("Home Component deactivated");
  },
};
</script>
