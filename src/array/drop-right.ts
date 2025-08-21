/**
 * The `dropRight` function removes a specified number of elements from the end of an array and returns
 * the modified array.
 * @param {T[]} arr - An array of elements of type T.
 * @param {number} itemsCount - The `itemsCount` parameter in the `dropRight` function represents the
 * number of items you want to remove from the end of the array `arr`.
 * @returns The `dropRight` function returns a new array with the specified number of items removed
 * from the end of the original array.
 */
export function dropRight<T>(arr: T[], itemsCount: number): T[] {
  return arr.slice(0, arr.length - itemsCount);
}
