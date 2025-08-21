/**
 * The function `drop` takes an array and a number as input, and returns a new array with the specified
 * number of items removed from the beginning.
 * @param {T[]} arr - An array of elements of type T.
 * @param {number} itemsCount - The `itemsCount` parameter specifies the number of items to drop from
 * the beginning of the array `arr`.
 * @returns The `drop` function is returning a new array that contains elements from the original array
 * `arr`, starting from the index specified by `itemsCount` and going to the end of the array.
 */
export function drop<T>(arr: T[], itemsCount: number): T[] {
  return arr.slice(itemsCount);
}
