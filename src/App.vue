<script setup lang="ts">
type BoardState = {
  x: number
  y: number
}

const state: BoardState = {
  x: 4,
  y: 4
}

type TileNumber = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048

type TileState = {
  x: number
  y: number
  number: TileNumber
  revealed: boolean
}

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

const tileColors = [
  'bg-white',
  'bg-orange-400',
  'bg-blue-400',
  'bg-red-400',
  'bg-pink-400',
  'bg-violet-400',
  'bg-amber-400',
  'bg-purple-400',
  'bg-rose-400',
  'bg-teal-400',
  'bg-emerald-400',
  'bg-sky-400'
]

function getTileClass(tile: TileState) {
  switch (tile.number) {
    case 2:
      return tileColors[1]
    case 4:
      return tileColors[2]
    case 8:
      return tileColors[3]
    case 16:
      return tileColors[4]
    case 32:
      return tileColors[5]
    case 64:
      return tileColors[6]
    case 128:
      return tileColors[7]
    case 256:
      return tileColors[8]
    case 512:
      return tileColors[9]
    case 1024:
      return tileColors[10]
    case 2048:
      return tileColors[11]
    default:
      return tileColors[0]
  }
}

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
        <div
          m-2
          min-w-20
          min-h-20
          shadow-lg
          border="~ rd-4"
          flex="~"
          justify-center
          items-center
          :class="getTileClass(tile)"
          v-for="(tile, x) in row"
          :key="x"
        >
          {{ tile.number }}
        </div>
      </div>
    </div>
    <div>powered by GeniusCorn</div>
  </div>
</template>

<style scoped></style>
