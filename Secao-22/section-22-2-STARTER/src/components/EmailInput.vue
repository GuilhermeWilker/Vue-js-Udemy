<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    v-model="value"
    :class="{
      'is-valid': value.length >= 4 && value.length > 0,
      'is-invalid': value.length < 4 && value.length > 0,
    }"
  />
</template>

<script>
export default {
  name: "EmailInput",
  data() {
    return {
      value: "",
    };
  },
};
</script>
