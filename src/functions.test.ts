import { UUID, isOnlySpaceCharText } from './functions'

describe('UUID', () => {
  test('should generate random 12 length of base62', () => {
    const results: string[] = []

    for (let i = 0; i <= 1000; i++) {
      const uuid: string = UUID()
      results.push(uuid)
    }

    results.forEach(uuid =>
      expect(uuid).toMatch(
        /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{12}$/
      )
    )
  })
})

describe('isOnlySpaceCharText', () => {
  test('shold return true when pass string that constructed by only space char', () => {
    const onlySpaceTextList = [
      ' ',
      '  ',
      '   ',
      '           ',
      '                                           '
    ]

    onlySpaceTextList.forEach(str => {
      expect(isOnlySpaceCharText(str)).toBe(true)
    })
  })

  test('should return false when pass string that is not constructed by only space char', () => {
    const normalTextList = [' tt ', 'wefijoij', 'fjew    ', '    ffff']
    normalTextList.forEach(str => {
      expect(isOnlySpaceCharText(str)).toBe(false)
    })
  })
})
