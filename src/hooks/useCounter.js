import { ref } from "vue"

export function useCounter(initValue = 0) {
  const counter = ref(initValue)

  function addCounter() {
    counter.value++
  }

  function subCounter() {
    counter.value--
  }

  return {
    counter,
    addCounter,
    subCounter,
  }
}
