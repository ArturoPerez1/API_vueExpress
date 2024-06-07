<template>
  <div>
    <h1 v-show="age < 18">Eres menor de edad</h1>
    <h1 v-show="age > 18">Eres mayor de edad</h1>

    <h1 v-if="(nota = 'do')">la nota tocada es do = {{ nota }}</h1>
    <h1 v-else>la nota tocada es {{ nota }}</h1>
  </div>
</template>

<script setup>
let age = 17
let nota = 'do'
</script>

<style scoped></style>

<!--
    Usar V-show para cuando vayamos a manejar valores reactivos
    Usar V-if para cuando sea una sola vez que vayamos a hacer comprobaciones

    cosas importantes a tener en cuenta:
        1. v-show monta en el virtual dom las etiquetas que se van 
        a mostrar según la condición esto quiere decir 
        que la que no cumpla la condición no se muestra.

        2. v-if monta la etiqueta en el dom cuando esta cumple la condición 
        establecida por lo que hay un proceso de renderizado distinto.
-->
