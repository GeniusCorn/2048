export type TileNumber =
  | 0
  | 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048

export type TileState = {
  x: number
  y: number
  number: TileNumber
  revealed: boolean
}
