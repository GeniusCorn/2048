<script setup lang="ts">
import { initBoard, moveTrigger, board } from '@/logic'

initBoard()

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' || e.key === 'w') moveTrigger('up')
  if (e.key === 'ArrowDown' || e.key === 's') moveTrigger('down')
  if (e.key === 'ArrowLeft' || e.key === 'a') moveTrigger('left')
  if (e.key === 'ArrowRight' || e.key === 'd') moveTrigger('right')
})
</script>

<template>
  <div flex="~ col" justify-evenly items-center h-screen>
    <div text-6xl>2048</div>
    <div>
      Use your arrow keys to move the tiles. When two tiles with the same number
      touch, they merge into one!
    </div>
    <div border="~ 1 rd-4" shadow-xl bg-slate-400>
      <div grid grid-cols-4>
        <div v-for="(row, y) in board" :key="y">
          <TileItem v-for="(tile, x) in row" :key="x" :tile="tile" />
        </div>
      </div>
    </div>
    <div>powered by GeniusCorn</div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}
</style>
