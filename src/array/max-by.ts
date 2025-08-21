import { keyBy } from './key-by.ts'

/**
 * The function `maxBy` returns the item from an array that has the maximum value based on a specified
 * function.
 * @param {T[]} items - An array of items of type T.
 * @param getValue - The `getValue` parameter is a function that takes an item of type `T` as input and
 * returns a number. This function is used to extract a numerical value from each item in the `items`
 * array, which is then used to determine the maximum value.
 * @returns The function `maxBy` returns the item from the input array `items` that has the maximum
 * value when the `getValue` function is applied to each item.
 */
export function maxBy<T>(items: T[], getValue: (item: T) => number): T {
  const object = keyBy(items, getValue)
  const maxValue = Math.max(
    ...Object.keys(object).map((item) => Number.parseFloat(item)),
  )
  return object[maxValue]
}
