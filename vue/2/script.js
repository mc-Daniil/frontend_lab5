import { createApp, ref } from 'vue'

createApp({
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}).mount('#app')