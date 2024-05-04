import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

export const useMainStore = defineStore('main', () => {
  const table = ref([
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
  ])

  const tableHighlight = ref([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ])

  const currentChecker = ref(null)

  function resetCurrentChecker() {
    currentChecker.value = null
  }

  const currentMove = ref(2)

  function toggleMove() {
    currentMove.value = currentMove.value === 1 ? 2 : 1
  }

  const userStore = useUserStore()

  function resetTable() {
    table.value = [
      [0, 2, 0, 2, 0, 2, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 2, 0, 2, 0, 2, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0]
    ]
  }

  function resetTableHighlight() {
    tableHighlight.value = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]
  }

  const winner = ref(null)

  function resetGame() {
    resetTable()
    resetTableHighlight()
    currentChecker.value = null
    currentMove.value = 2
    winner.value = null
    userStore.userWhite.resetAll()
    userStore.userBlack.resetAll()
  }

  function setWinner(value) {
    winner.value = value === 2 ? 'Белые' : 'Черные'
  }

  return {
    table,
    tableHighlight,
    currentChecker,
    toggleMove,
    currentMove,
    resetGame,
    resetCurrentChecker,
    resetTableHighlight,
    setWinner,

    winner
  }
})
