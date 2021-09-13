import { createStore, createLogger, ModuleTree } from 'vuex'
import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    reset({ commit }) {
      // resets state of all the modules
      Object.keys(modules).forEach((moduleName) => {
        commit(`${moduleName}/RESET`)
      })
    },
  },
  modules: modules as ModuleTree<any>,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
