import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)

  const double = computed(() => count.value * 2)

  const increment = () => {
    count.value += 1
  }

  const reset = () => {
    count.value = 0
  }

  return {
    count,
    double,
    increment,
    reset,
  }
})

