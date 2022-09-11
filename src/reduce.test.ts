describe('reduce tests', () => {
  it('should calculate average', () => {
    const results = [
      { id: 1, result: 64 },
      { id: 2, result: 87 },
      { id: 3, result: 89 },
    ]

    const average = results.map(x => x.result).reduce((prev, curr) => prev + curr, 0) / results.length
    expect(average).toBe(80)
  })

  it('should reduce conditionally', () => {
    const colorsTable: { [key: string]: number } = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9,
    }

    const colors = ['brown', 'black']
    const value = colors
      .map(x => colorsTable[x.toLowerCase()])
      .reduce((prev, cur, index) => {
        if (index === 0) {
          return prev + cur * 10
        }

        if (index === 1) {
          return prev + cur
        }

        return prev + 0
      }, 0)

    expect(value).toBe(10)
  })
})


