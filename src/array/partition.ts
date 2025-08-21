/**
 * The `partition` function in TypeScript takes an array and a function to determine truthiness, then
 * splits the array into two separate arrays based on the truthiness of the elements.
 * @param {T[]} arr - An array of elements of type T that you want to partition based on a condition.
 * @param isInTruthy - The `isInTruthy` parameter is a function that takes an item of type `T` as input
 * and returns a boolean value indicating whether the item is considered truthy or not. This function
 * is used to partition the input array `arr` into two separate arrays based on the truthiness of its
 * @returns The `partition` function returns an array containing two arrays: the first array contains
 * elements from the input array `arr` for which the `isInTruthy` function returns `true`, and the
 * second array contains elements for which the `isInTruthy` function returns `false`.
 */
export function partition<T>(
  arr: T[],
  isInTruthy: (item: T) => boolean,
): [truthy: T[], falsy: T[]] {
  const truthy: T[] = []
  const falsy: T[] = []
  let i = 0
  while (i < arr.length) {
    const item = arr[i]
    isInTruthy(item) ? truthy.push(item) : falsy.push(item)
    i++
  }
  return [truthy, falsy]
}
