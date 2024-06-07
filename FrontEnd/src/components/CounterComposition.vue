<template>
  <div>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CounterComposition',
  setup() {
    let counter = ref(0)
    const addCounter = () => {
      counter.value++
      console.log(counter.value)
    }
    return { counter, addCounter }
  }
})
</script>
