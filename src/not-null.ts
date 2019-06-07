/**
 * Given any type and an optional message, throw a TypeError if the value is
 * null or undefined, or otherwise return the value.
 */
export const notNull =
  <T>(x: T | null | undefined, message?: string): T => {
    if (x == null) {
      throw new TypeError(message)
    }

    return x
  }
