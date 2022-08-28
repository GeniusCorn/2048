<script setup lang="ts">
const props = defineProps<{
  number: number
}>()

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

function setTileNumberClass(tile: number) {
  switch (tile) {
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
</script>

<template>
  <div
    m-2
    min-w-20
    min-h-20
    shadow-lg
    border="~ rd-4"
    flex="~"
    justify-center
    items-center
    :class="setTileNumberClass(props.number)"
  >
    {{ props.number }}
  </div>
</template>

<style scoped></style>
