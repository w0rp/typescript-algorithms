import {orderBy} from './order-by'
import {uniq} from './uniq'

describe('uniq', () => {
  it('should work on empty Arrays', () => {
    const array: number[] = []
    const result = uniq([], (a, b) => 0)

    expect(result).toEqual([])
    expect(result).not.toBe(array)
  })

  it('should remove repeated elements', () => {
    const array = [{a: 1}, {a: 2}, {a: 2}, {a: 3}]

    const result = uniq(array, orderBy(x => x.a))

    expect(result).toEqual([{a: 1}, {a: 2}, {a: 3}])
    expect(result).not.toBe(array)
  })
})
