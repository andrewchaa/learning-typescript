describe('function tests', () => {
  it('should set a default value', () => {
    const twoFer = (name: string = 'you') => {
      return `One for ${name}, one for me.`
    }

    expect(twoFer()).toEqual('One for you, one for me.')
  })

  it('rest parameters can receive any number of arguments', () => {
    const add = (...numbers: number[]) => {
      return numbers.reduce((prev, curr) => prev + curr, 0)
    }

    expect(add(1, 2, 3)).toEqual(6)
  })
})
