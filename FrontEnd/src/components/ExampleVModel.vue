<template>
    <div>
        <form>
            <input type="text" v-model="inputText"/>
            <input type="checkbox" v-model="agree"/> Acepto los términos y condiciones
            <select v-model="country">
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
                <option value="Italy">Italy</option>

            </select>
        </form>    
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    let inputText = ref(''); // valor por defecto del input
    let agree = ref(true); // valor por defecto del checkbox
    let country = ref('UK'); /*Valor por defecto del select que hace
    refencia al value de la opción, en vue si no usamos el atributo value este tomará por 
    valor el contenido interno de la etiqueta como value*/
</script>

<style scoped>

</style>


<!--
    v-model te permite crear un enlace bidireccional entre la vista y el modelo
    lo que quiere decir que podemos colocar valores por defecto que serán modificados
    por las acciones que lleve a cabo el usuario.
-->