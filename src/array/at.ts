/**
 * The function `at` takes an array and an array of indices, and returns a new array containing the
 * elements at the specified indices from the original array.
 * @param {T[]} arr - An array of elements of type T.
 * @param {number[]} indices - The `indices` parameter is an array of numbers that represent the
 * indices of elements to be retrieved from the `arr` array.
 * @returns The `at` function returns an array of elements from the input array `arr` at the specified
 * indices provided in the `indices` array.
 */
export function at<T>(arr: T[], indices: number[]): T[] {
  return indices.map((index) => arr[index]);
}
