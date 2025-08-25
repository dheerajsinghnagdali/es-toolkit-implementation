/**
 * The function `isSubsetWith` checks if one array is a subset of another array based on a custom
 * equality comparison function.
 * @param {T[]} superset - The `superset` parameter is an array of elements of type `T`. It represents
 * the larger set of elements that we want to check if the `subset` is a part of.
 * @param {T[]} subset - The `subset` parameter is an array of elements of type `T`. It represents a
 * subset of elements that you want to check if it is a subset of another array called `superset`.
 * @param areItemsEqual - The `areItemsEqual` parameter is a function that takes two items of type `T`
 * as input and returns a boolean value indicating whether the two items are considered equal. This
 * function is used to compare items from the `subset` array with items from the `superset` array to
 * determine if
 * @returns The `isSubsetWith` function is returning a boolean value. It checks if all elements in the
 * `subset` array are present in the `superset` array based on the equality comparison function
 * `areItemsEqual`. If all elements in the `subset` array are found in the `superset` array, it returns
 * `true`, indicating that the `subset` is a subset of the `
 */
export function isSubsetWith<T>(
  superset: T[],
  subset: T[],
  areItemsEqual: (x: T, y: T) => boolean,
): boolean {
  return subset.every((item) => superset.some((el) => areItemsEqual(item, el)))
}
