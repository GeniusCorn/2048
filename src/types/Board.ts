export interface BoardState {
  x: number
  y: number
}

export interface TileState {
  x: number
  y: number
  number: number
}

export const state: BoardState = {
  x: 4,
  y: 4
}
