<template>
  <p v-bind:class="{ danger: hasError }">El mensaje se ha envido satisfactoriamente</p>
</template>

<script setup>
let hasError = false
</script>

<style scoped>
.danger {
  color: red;
}
</style>

<!--
    Notas importartes acerca de v-bind:
        Esta directiva te permite crear un enlace unidireccional del modelo
        con la vista, esto nos permite cambiar el comportamiento de los atributos 
        de una etiqueta al usar valores definidos en nuestro modelo que
        está en la etiqueta script como por ejemplo:

        <a :href="url">IR</a>

        url = variable definida en el modelo
        :href = atrituto href de la etiqueta "a"
        
        Esto estaría enlazando mi modelo que está definido en el script
        con mi vista que está en el template, por que no usamos {{}} pues porque
        vue maneja los valores de los atributos de una etiqueta de una manera 
        muy diferente y la manera que tenemos para enlazar el modelo con 
        la vista es v-bind o v-model que la usaremos más adelante.
-->
