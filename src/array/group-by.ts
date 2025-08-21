/**
 * The `groupBy` function takes an array and a function to extract keys from its elements, then returns
 * an object mapping keys to arrays of elements with the same key.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param getKeyFromItem - The `getKeyFromItem` parameter is a function that takes an item of type `T`
 * as input and returns a `PropertyKey`. This function is used to extract a key from each item in the
 * input array `arr`, which is then used to group the items into an object where the keys
 * @returns The `groupBy` function returns an object where the keys are determined by the result of
 * calling the `getKeyFromItem` function on each item in the input array `arr`, and the values are
 * arrays of items from the input array that share the same key.
 */
export function groupBy<T>(
  arr: T[],
  getKeyFromItem: (item: T) => PropertyKey,
): Record<PropertyKey, T[]> {
  return arr.reduce((previous, current) => {
    const key = getKeyFromItem(current);
    previous[key] = previous[key] ? [...previous[key], current] : [current];
    return previous;
  }, {} as Record<PropertyKey, T[]>);
}
