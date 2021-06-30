<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <hr>
  <p>{{tarea}}</p>  
</template>

<script>

import Input from '../components/Input.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('No esta vacío')

      // Generar ID
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      // Procesar/enviar formulario
      this.setTareas(this.tarea)

      // Borrar campos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  }
}
</script>
