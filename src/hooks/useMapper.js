import { computed } from "vue"
import { useStore } from "vuex"

export function useMapper(mapper, mapFn) {
  const store = useStore()

  const storeGetterFns = mapFn(mapper)

  const storeGetters = {}

  Object.keys(storeGetterFns).forEach((fnKey) => {
    const fn = storeGetterFns[fnKey].bind({ $store: store })
    storeGetters[fnKey] = fn.name === "bound mappedMutation" ? fn : computed(fn)
  })

  return storeGetters
}
