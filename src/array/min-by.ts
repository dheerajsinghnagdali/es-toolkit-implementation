import { keyBy } from './key-by.ts'

/**
 * The function `minBy` returns the item from an array that has the minimum value based on a specified
 * function.
 * @param {T[]} items - An array of items of type T.
 * @param getValue - The `getValue` parameter is a function that takes an item of type `T` as input and
 * returns a number. This function is used to extract a numerical value from each item in the `items`
 * array, which is then used to determine the minimum value.
 * @returns The `minBy` function is returning the item from the `items` array that has the minimum
 * value when the `getValue` function is applied to each item.
 */
export function minBy<T>(items: T[], getValue: (item: T) => number): T {
  const object = keyBy(items, getValue)
  const maxValue = Math.min(
    ...Object.keys(object).map((item) => Number.parseFloat(item)),
  )
  return object[maxValue]
}
