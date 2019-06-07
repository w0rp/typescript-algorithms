type OrderByCallback<T> = ((x: T) => number) | ((x: T) => string)

/**
 * Given a callback for any type that returns a number or string to compare
 * values by, return a comparison function for use with Array.sort.
 *
 * Strings are only compared with the default comparison function, which may
 * not be preferable for human readable output, but is much faster than
 * localeCompare.
 */
export const orderBy =
  <T>(cb: OrderByCallback<T>): ((a: T, b: T) => -1 | 0 | 1) =>
    (a, b) => {
      const aValue = cb(a)
      const bValue = cb(b)

      if (aValue < bValue) {
        return -1
      }

      if (aValue > bValue) {
        return 1
      }

      return 0
    }
