/**
 * The function `keyBy` takes an array of items and a function to extract keys from the items, then
 * returns an object where the keys are extracted from the items and the values are the items
 * themselves.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param getKeyFromItem - The `getKeyFromItem` parameter is a function that takes an item of type `T`
 * as input and returns a `PropertyKey`. This function is used to extract a unique key from each item
 * in the array `arr`, which will be used as the key in the resulting object.
 * @returns The `keyBy` function returns an object where the keys are determined by the
 * `getKeyFromItem` function applied to each item in the input array `arr`, and the values are the
 * corresponding items from the array.
 */
export function keyBy<T>(
  arr: T[],
  getKeyFromItem: (item: T) => PropertyKey,
): Record<PropertyKey, T> {
  return arr.reduce((previous, current) => {
    const key = getKeyFromItem(current)
    previous[key] = current
    return previous
  }, {} as Record<PropertyKey, T>)
}
