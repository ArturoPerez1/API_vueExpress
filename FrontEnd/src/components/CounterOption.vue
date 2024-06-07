<template>
  <div>
    <h3>Contador de Cliks {{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CounterOption',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addCounter() {
      this.counter++
    }
  }
})
</script>

<style scoped></style>
