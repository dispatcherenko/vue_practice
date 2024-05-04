<template>
  <div class="table-cell" @click="moveChecker">
    <div
      v-if="figureType !== 0"
      class="table-cell__figure"
      :class="{
        'table-cell__figure--black': figureType === 1,
        'table-cell__figure--white': figureType === 2
      }"
      @click.stop="showWay"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores'

const store = useMainStore()
const { table } = storeToRefs(store)

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['showWay', 'moveChecker'])

const figureType = ref(props.data.figureType)

const cx = ref(props.data.cx)
const cy = ref(props.data.cy)
const current = reactive({
  cx: cx.value,
  cy: cy.value,
  figureType: figureType.value
})

function moveCalculate(ways) {
  const availableWays = {
    1: ['topLeft', 'topRight'],
    2: ['bottomLeft', 'bottomRight']
  }

  const temp = []

  ways.forEach((way) => {
    const { cx, cy, position } = way
    const tableCell = table.value[cy][cx]
    const canMove = availableWays[figureType.value].includes(position)

    //ячейка пуста, но неверное направление
    if (tableCell === 0 && !canMove) return
    //ячейка пуста, но верное направление
    if (tableCell === 0 && canMove) {
      return temp.push(way)
    }
    if (tableCell !== figureType.value) {
      return temp.push(editWay(way))
    }
  })

  return temp
}

function canMove(way) {
  const { cx, cy } = way

  //в пределах поля и ячейка пуста
  return onTable(way) && table.value[cy][cx] === 0
}

function showWay() {
  let ways = [
    {
      position: 'topLeft',
      cx: cx.value - 1,
      cy: cy.value - 1
    },
    {
      position: 'topRight',
      cx: cx.value + 1,
      cy: cy.value - 1
    },
    {
      position: 'bottomLeft',
      cx: cx.value - 1,
      cy: cy.value + 1
    },
    {
      position: 'bottomRight',
      cx: cx.value + 1,
      cy: cy.value + 1
    }
  ].filter((item) => onTable(item))

  ways = moveCalculate(ways).filter((item) => canMove(item))

  emit('showWay', { ways, current })
}

function onTable(way) {
  const { cx, cy } = way

  return cx >= 0 && cx < 8 && cy >= 0 && cy < 8
}

function moveChecker() {
  emit('moveChecker', current)
}

function editWay(way) {
  const { cx, cy, position } = way

  const options = {
    topLeft: (x, y) => ({ cx: x - 1, cy: y - 1 }),
    topRight: (x, y) => ({ cx: x + 1, cy: y - 1 }),
    bottomLeft: (x, y) => ({ cx: x - 1, cy: y + 1 }),
    bottomRight: (x, y) => ({ cx: x + 1, cy: y + 1 })
  }

  return Object.assign({ position }, options[position](cx, cy))
}
</script>

<style lang="less">
.table-cell {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  &__figure {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 1px 4px @gray;

    &--black {
      background-color: @black;
    }

    &--white {
      background-color: @white;
    }
  }
}
</style>
