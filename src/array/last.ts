/**
 * The function `last` in TypeScript returns the last element of an array or undefined if the array is
 * empty.
 * @param {T[]} arr - An array of elements of type T.
 * @returns The function `last` returns the last element of the input array `arr`, or `undefined` if
 * the array is empty.
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}
