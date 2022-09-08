it('should calculate average', () => {
  const results = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 },
  ]

  const average = results.map(x => x.result).reduce((prev, curr) => prev + curr, 0) / results.length
  expect(average).toBe(80)
})
