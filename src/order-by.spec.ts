import {orderBy} from './order-by'

describe('orderBy', () => {
  it('should sort objects by number properties correctly', () => {
    const array = [
      {a: 2, b: 'two'},
      {a: 1, b: 'one'},
      {a: 5, b: 'five'},
      {a: 3, b: 'three'},
      {a: 3, b: 'three'},
    ]

    array.sort(orderBy(x => x.a))

    expect(array).toEqual([
      {a: 1, b: 'one'},
      {a: 2, b: 'two'},
      {a: 3, b: 'three'},
      {a: 3, b: 'three'},
      {a: 5, b: 'five'},
    ])
  })

  it('should sort objects by string properties correctly', () => {
    const array = [
      {a: 2, b: 'two'},
      {a: 1, b: 'one'},
      {a: 5, b: 'five'},
      {a: 3, b: 'three'},
      {a: 3, b: 'three'},
    ]

    array.sort(orderBy(x => x.b))

    expect(array).toEqual([
      {a: 5, b: 'five'},
      {a: 1, b: 'one'},
      {a: 3, b: 'three'},
      {a: 3, b: 'three'},
      {a: 2, b: 'two'},
    ])
  })
})
