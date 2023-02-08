import { ref, watchEffect, watch } from "vue";

export const usePhrase = () => {
  const phrase = ref("");
  const reversePhrase = ref("");
  const num = ref("");

  // watch([phrase], ([newVal, oldVal]) => {
  //   reversePhrase.value = phrase.value.split("").reverse().join("");
  // });

  watchEffect(() => {
    reversePhrase.value = phrase.value.split("").reverse().join("");
  });

  return {
    phrase,
    reversePhrase,
  };
};
