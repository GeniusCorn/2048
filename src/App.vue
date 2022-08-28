<script setup lang="ts">
import { TileState } from '@/types/Tile'
import { state } from '@/types/Board'

import TileItem from '@/components/TileItem.vue'

const board = Array.from({ length: state.y }, (_, y) =>
  Array.from(
    { length: state.x },
    (_, x): TileState => ({
      x,
      y,
      number: 0,
      revealed: false
    })
  )
)

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function initTile() {
  const x = getRandomInt(state.x)
  const y = getRandomInt(state.y)

  board[y][x] = {
    x,
    y,
    number: 2,
    revealed: true
  }
}

initTile()
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
        <TileItem :number="tile.number" v-for="(tile, x) in row" :key="x">
        </TileItem>
      </div>
    </div>
    <div>powered by GeniusCorn</div>
  </div>
</template>

<style scoped></style>
