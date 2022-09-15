import { defineStore } from 'pinia'
import Demo from './modules/Demo'

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      Demo,
    }
  },
  getters: {},
  actions: {},
})
