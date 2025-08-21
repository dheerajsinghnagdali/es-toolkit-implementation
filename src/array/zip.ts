/**
 * The `zip` function in TypeScript takes multiple arrays and combines their elements into a new array
 * of arrays, where each inner array contains elements from the same index position across the input
 * arrays.
 * @param {T[][]} values - The `zip` function takes in multiple arrays of values as its parameters. It
 * then combines these arrays by grouping their elements at the same index together into new arrays.
 * The function returns an array of arrays where each inner array contains the elements from the input
 * arrays at the corresponding index.
 * @returns The `zip` function is returning an array of arrays where each inner array contains the
 * elements at the same index from the input arrays.
 */
export function zip<T>(...values: T[][]): T[][] {
  const result: T[][] = []
  const len = values.length
  let i = 0

  while (i < len) {
    result.push(
      Array(len)
        .fill(null)
        .map((_, index) => values[index][i]),
    )
    i++
  }

  return result
}
