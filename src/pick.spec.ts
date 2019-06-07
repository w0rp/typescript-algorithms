import {pick} from './pick'

describe('pick', () => {
  it('should result in an empty object when picking nothing', () => {
    const source = {a: 1, b: 2, c: 3}
    const result = pick(source)

    expect(result).toEqual({})
  })

  it('should support picking specific attributes', () => {
    const source = {a: 1, b: 2, c: 3}
    const result = pick(source, 'a', 'c')

    expect(result).toEqual({a: 1, c: 3})
  })
})
