<template>
  <AppForm>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>

    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
    </template>

    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy text</p>
  </AppForm>

  <AppForm>
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>

    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>

    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>

<script>
import AppForm from "./components/Form.vue";

export default {
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      help: "This is some help text..",
    };
  },
};
</script>

<style>
body {
  margin: auto;
}

input {
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
}

button {
  padding: 5px;
}
</style>
