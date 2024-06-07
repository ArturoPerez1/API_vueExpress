<template>
    <div>
        <h1>Hola mundo</h1>
    </div>
</template>

<script >
    import { defineComponent } from "vue";

    export default defineComponent ({
        name: 'CycleOption',
        data() {
            return {
                name: 'Arturo'
            }
        },
        created() {
            console.log('created')
        },

        mounted() {
            console.log('mounted')
        },

        updated() {
            console.log('updated')
        },

        unmounted() {
            console.log('destroyed')
        },
    })
</script>

<style scope>
    
</style>


<!--
    Para manejar los ciclos de vida en el option api solo tenemos que llamar 
    a los métodos con el nombre del momento en que queremos que estos se ejecuten
    en el ciclo de vida del componente. Ejemplo las funciones que tengo después 
    del name
-->