<template>
  <ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
let countries = ref([
  {
    code: 'es',
    name: 'spain'
  },
  {
    code: 'en',
    name: 'uk'
  },
  {
    code: 'it',
    name: 'Italy'
  }
])
</script>

<style scoped></style>

<!--

    importante para que el v-for funciones de manera correcta hay que definir 
    un identificador propio para cada valor recorrido, que quiere decir esto,
    pues que necesitamos que por cada valor haya algo que le de un significado propio
    y esto lo hacemos con v-bind:key o con el shorthand :key y esa 
    key tiene un valor.
-->
