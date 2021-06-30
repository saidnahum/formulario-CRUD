import { createStore } from 'vuex'

export default createStore({
	state: {
    tareas: [],
    tarea: {
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
		set(state, payload){
			state.tareas.push(payload)
			console.log(state.tareas)
		}
  },
  actions: {
    setTareas({ commit }, tarea){
      commit('set', tarea)
    }
  },
  modules: {
  }
})
