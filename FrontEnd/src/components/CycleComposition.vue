<template>
    <div>
        <h1>Hola mundo</h1>
    </div>
</template>

<script setup>
    import {onMounted, onUpdated} from 'vue'

    onMounted(() => {
        console.log('Mounted')
    })

    onUpdated(() => {
        console.log('update')
    })
</script>

<style scope>
    
</style>


<!--
    Para manejar los ciclos de vida en el composition api hay que aplicar hooks,
    estos nos los tenemos que importar y para ello solo tenemos que destructurar
    el importado y traernoslos para luego ser ejecutados como funciones que reciben
    por parámetros un callback

-->