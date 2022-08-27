<script setup lang="ts">
type boardState = {
  x: number
  y: number
}

const state: boardState = {
  x: 4,
  y: 4
}

type tileState = {
  x: number
  y: number
  revealed: boolean
}

const board = Array.from({ length: state.y }, (_, y) =>
  Array.from(
    { length: state.x },
    (_, x): tileState => ({
      x,
      y,
      revealed: false
    })
  )
)
</script>

<template>
  <div flex="~ col" justify-evenly items-center h-screen>
    <div text-6xl>2048</div>
    <div>
      Use your arrow keys to move the tiles. When two tiles with the same number
      touch, they merge into one!
    </div>
    <div border="~ 1 rd-4" shadow-xl bg-slate-400>
      <div flex="~" v-for="(row, y) in board" :key="y">
        <div
          m-2
          min-w-20
          min-h-20
          shadow-lg
          border="~ rd-4"
          bg-white
          flex="~"
          justify-center
          items-center
          v-for="(tile, x) in row"
          :key="x"
        ></div>
      </div>
    </div>
    <div>powered by GeniusCorn</div>
  </div>
</template>

<style scoped></style>
