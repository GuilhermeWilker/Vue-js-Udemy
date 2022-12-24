<template>
  <form>
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 25px;
  width: 500px;

  border: 1px solid black;
  border-radius: 15px;

  margin: 50px;
}

.fields {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  width: 450px;

  padding: 20px;
  border: 1px solid black;
  border-radius: 15px;

  margin-bottom: 15px;
}
</style>
