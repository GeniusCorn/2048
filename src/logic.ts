import { TileState } from './types/Board'

export let board = $ref<TileState[][]>()

function getRandomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  )
}

export function initBoard() {
  board = Array.from({ length: state.y }, (_, x): TileState[] =>
    Array.from(
      { length: state.x },
      (_, y): TileState => ({
        x,
        y,
        number: 0
      })
    )
  )

  const x = getRandomInt(0, state.x - 1)
  const y = getRandomInt(0, state.y - 1)

  board.forEach(i => {
    i.forEach(j => {
      if (j.x === x && j.y === y) {
        j.number = 2
      }
    })
  })
}

function generateNewRevealedTile() {
  let generate = true

  while (generate) {
    const x = getRandomInt(0, state.x - 1)
    const y = getRandomInt(0, state.y - 1)

    board.forEach(i => {
      i.forEach(j => {
        if (j.x === x && j.y === y && j.number === 0) {
          j.number = 2
          generate = !generate
        }
      })
    })
  }
}

// TODO: Move logic
export function moveTrigger(direction: string) {
  switch (direction) {
    case 'up':
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          let item = board[i][j]

          if (item.number !== 0 && item.y !== 0) {
            const x = item.x
            let y = item.y - 1
            while (y >= 0) {
              if (
                board[x][y].number === item.number ||
                board[x][y].number === 0
              ) {
                board[x][y].number = board[x][y].number + item.number
                item.number = 0
                item = board[x][y]
                y -= 1
              }
            }
          }
        }
      }

      break

    case 'down':
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          let item = board[i][j]

          if (item.number !== 0 && item.y !== state.y - 1) {
            const x = item.x
            let y = item.y + 1

            while (y < state.y) {
              if (
                board[x][y].number === item.number ||
                board[x][y].number === 0
              ) {
                board[x][y].number = board[x][y].number + item.number
                item.number = 0
                item = board[x][y]
                y += 1
              }
            }
          }
        }
      }

      break

    case 'left':
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          let item = board[i][j]

          if (item.number !== 0 && item.x !== 0) {
            let x = item.x - 1
            const y = item.y

            while (x >= 0) {
              if (
                board[x][y].number === item.number ||
                board[x][y].number === 0
              ) {
                board[x][y].number = board[x][y].number + item.number
                item.number = 0
                item = board[x][y]
                x -= 1
              }
            }
          }
        }
      }
      break

    case 'right':
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          let item = board[i][j]

          if (item.number !== 0 && item.x !== state.x - 1) {
            let x = item.x + 1
            const y = item.y

            while (x < state.x) {
              if (
                board[x][y].number === item.number ||
                board[x][y].number === 0
              ) {
                board[x][y].number = board[x][y].number + item.number
                item.number = 0
                item = board[x][y]
                x += 1
              }
            }
          }
        }
      }
      break

    default:
      break
  }

  generateNewRevealedTile()
}
