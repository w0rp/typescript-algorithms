import {notNull} from './not-null'

describe('notNull', () => {
  it('should permit data that is not null', () => {
    const result: object = notNull({} as object | null)

    expect(result).toEqual({})
  })

  it('should throw for data that is null', () => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const result: object = notNull(null as object | null)
    }).toThrow(TypeError)
  })

  it('should support custom messages', () => {
    expect(() => {
      notNull(null, 'custom error')
    }).toThrow('custom error')
  })
})
