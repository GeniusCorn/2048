export interface TileState {
  x: number
  y: number
  number: number
}

export const board = $ref<TileState[]>([])

function getRandomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  )
}

export function initBoard() {
  for (let i = 0; i < state.x; i += 1) {
    for (let j = 0; j < state.y; j += 1) {
      board.push({
        x: j,
        y: i,
        number: 0
      })
    }
  }

  const x = getRandomInt(0, 3)
  const y = getRandomInt(0, 3)

  board.forEach(i => {
    if (i.x === x && i.y === y) {
      i.number = 2
    }
  })
}

function getRevealedTile() {
  const revealedTile: TileState[] = []

  board.forEach(i => {
    if (i.number !== 0) {
      revealedTile.push(i)
    }
  })

  return revealedTile
}

export function moveTrigger(direction: string) {
  const revealedTile = getRevealedTile()

  switch (direction) {
    case 'up':
      revealedTile.forEach((revealedTile: TileState) => {
        const { x, y, number } = revealedTile

        if (y === 0) {
          return
        }

        for (let i = y; i > 0; i -= 1) {
          for (let j = 0; j < board.length; j += 1) {
            const tile = board[j]

            if (tile.x === x) {
              if (tile.number === 0 || tile.number === number) {
                tile.number = number + tile.number
                revealedTile.number = 0
                return
              }
            }
          }
        }
      })
      break

    case 'down':
      revealedTile.forEach((revealedTile: TileState) => {
        const { x, y, number } = revealedTile

        if (y === state.y - 1) {
          return
        }

        for (let i = state.y - 1; i > 0; i -= 1) {
          for (let j = 0; j < board.length; j += 1) {
            const tile = board[j]
            if (tile.y === i && tile.x === x) {
              if (tile.number === 0 || tile.number === number) {
                tile.number = number + tile.number
                revealedTile.number = 0
                return
              }
            }
          }
        }
      })
      break

    case 'left':
      revealedTile.forEach((revealedTile: TileState) => {
        const { x, y, number } = revealedTile

        if (x === 0) {
          return
        }

        for (let i = x; i > 0; i -= 1) {
          for (let j = 0; j < board.length; j += 1) {
            const tile = board[j]
            if (tile.x < i && tile.y === y) {
              if (tile.number === 0 || tile.number === number) {
                tile.number = number + tile.number
                revealedTile.number = 0
                return
              }
            }
          }
        }
      })

      break

    case 'right':
      revealedTile.forEach((revealedTile: TileState) => {
        const { x, y, number } = revealedTile

        if (x === state.x - 1) {
          return
        }

        for (let i = state.x - 1; i > 0; i -= 1) {
          for (let j = 0; j < board.length; j += 1) {
            const tile = board[j]
            if (tile.x === i && tile.y === y) {
              if (tile.number === 0 || tile.number === number) {
                tile.number = number + tile.number
                revealedTile.number = 0
                return
              }
            }
          }
        }
      })
      break

    default:
      break
  }
}
