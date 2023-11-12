import { ref } from "vue"

export function useSkeleton(initValue = true) {
  const loading = ref(initValue)

  setTimeout(() => {
    loading.value = !loading.value
  }, 3000)

  return {
    loading,
  }
}
