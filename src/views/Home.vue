<template>
  <form @submit.prevent="procesarFormulario">
    <input 
    type="text"
    class="form-control my-2"
    placeholder="Ingrese su nombre"
    v-model.trim="tarea.nombre"
  >
  <div class="form-check form-check-inline">
    <input 
      type="checkbox"
      id="check-1"
      class="form-check-input"
      value="Javascript"
      v-model="tarea.categorias"
    >
    <label class="form-check-label" for="check-1">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
      type="checkbox"
      id="check-2"
      class="form-check-input" 
      value="NodeJS"
      v-model="tarea.categorias"
    >
    <label class="form-check-label" for="check-2">NodeJS</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
      type="checkbox"
      id="check-2"
      class="form-check-input"
      value="VueJs"
      v-model="tarea.categorias" 
    >
    <label class="form-check-label" for="check-2">VueJs</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input 
        type="radio" 
        id="radio-1"
        class="form-check-input"
        value="Urgente"
        v-model="tarea.estado"
      >
      <label for="radio-1" class="form-chech-label">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio" 
        id="radio-2"
        class="form-check-input"
        value="En tiempo"
        v-model="tarea.estado"
      >
      <label for="radio-2" class="form-chech-label">En tiempo</label>
    </div>
  </div>
  <div class="mt-2">
    <input 
      type="number"
      class="form-control"
      v-model.number="tarea.numero"
    >
  </div>
  <button 
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="bloquear"
  >
    Procesar
  </button>
  </form>
  <hr>
  <p>{{tarea}}</p>  
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('No esta vacío')
      // Procesar/enviar formulario

      // Borrar campos
      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === '' ? true : false
    }
  }
}
</script>
