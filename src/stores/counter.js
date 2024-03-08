import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
/*   const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */
  const data = ref([])
  const cities = ref([])
  const getCities = async () => {
    data.value = await fetch('https://api.openaq.org/v1/cities').then(res => res.json())
  }

  return {  }
})
