import { User } from '@/entities'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from "axios"
import router from '@/router'

class State {
  loading = false
  error = ''
  users: User[] = []
  user: User | undefined

  reset(): void {
    this.loading = false
    this.error = ''
    this.users = []
    this.user = undefined
  }
}

const getters = <GetterTree<State, any>>{
  getLoading(state): boolean {
    return state.loading
  },
  getError(state): string {
    return state.error
  },
  getUsers(state): User[] {
    return state.users
  },
  getUser(state): User | undefined {
    return state.user
  }
}

const actions = <ActionTree<State, any>>{
  reset({ commit }) {
    commit('RESET')
  },
  async get({ commit }, id: string): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data: User = await (await axios.get(`http://127.0.0.1:3000/api/users/${id}`)).data
      commit('SET_USER', data)
    } catch (error) {
      console.log(error)
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async fetch({ commit }, options = {}): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data: User[] =await (await axios.get('http://127.0.0.1:3000/api/users')).data
      commit('SET_USERS', data)
    } catch (error) {
      console.log(error)
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async post({ commit }, options = {}): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data: User = await axios.post('http://127.0.0.1:3000/api/users', options)
      router.push({path : "/"})
      commit('ADD_USER', data)
    } catch (error) {
      console.log(error)
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async patch({ commit }, payload): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data: User = await axios.put(`http://127.0.0.1:3000/api/users/${payload.id}`, payload.data)
      router.push({path : "/"})
      commit('ADD_USER', data)
    } catch (error) {
      console.log(error)
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async delete({ commit }, id: string): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const data = await await (await axios.delete(`http://127.0.0.1:3000/api/users/${id}`)).data
      router.push({path : "/"})
      commit('SET_USER', data)
    } catch (error) {
      console.log(error)
      commit('SET_ERROR', error.message)
    } finally {
      commit('SET_LOADING', false)
    }
  },
}

const mutations = <MutationTree<State>>{
  RESET(state) {
    state.reset()
  },
  SET_LOADING(state, data): void {
    state.loading = data
  },
  ADD_USER(state, data: User): void {
    state.users = []
    state.users.push(data)
  },
  SET_USERS(state, data: User[]): void {
    state.users = data
  },
  SET_USER(state, data: User): void {
    state.user = data
  },
  SET_ERROR(state, data): void {
    state.error = data
  },
}

export default {
  namespaced: true,
  state: new State(),
  getters,
  actions,
  mutations,
}
