import { defineStore } from 'pinia'
import type { HomeUI } from '../type/homeType'
import { reactive } from 'vue'

export const useHomeStore = defineStore('home', () => {
  const home_ui: HomeUI = reactive({
    isOpen: false
  })
  const getIsOpen = () => {
    return home_ui.isOpen
  }
  const setIsOpen = () => {
    home_ui.isOpen = !home_ui.isOpen
  }
  return {
    getIsOpen,
    setIsOpen
  }
})


