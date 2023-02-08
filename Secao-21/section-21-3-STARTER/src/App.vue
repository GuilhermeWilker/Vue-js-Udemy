<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment">Increment</button>

    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversePhrase }}</p>

    <Alert :user="user" />

    <button ref="btn">Button</button>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  watchEffect,
  watch,
  computed,
  onBeforeMount,
  onMounted,
  toRef,
} from "vue";

import Alert from "./components/Alert.vue";

import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";

const btn = ref(null);

onBeforeMount(() => {
  console.log("Before Mount");
});

onMounted(() => {
  console.log("Mounted");

  btn.value.addEventListener("click", () => {
    console.log("CLicked");
  });
});

const user = reactive({
  name: "Guilherme",
  age: 21,
});

setTimeout(() => {
  user.name = "Beatriz";
}, 3000);

const { num, increment, double } = useNumber();
const { phrase, reversePhrase, num: phraseNum } = usePhrase();

const { name } = toRefs(user);
</script>
