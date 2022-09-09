describe('function tests', () => {
  it('should set a default value', () => {
    const twoFer = (name = 'you') => {
      return `One for ${name}, one for me.`
    }

    expect(twoFer()).toEqual('One for you, one for me.')
  })
})
