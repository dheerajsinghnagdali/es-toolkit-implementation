/**
 * The `countBy` function takes an array and a mapping function, then returns an object with the count
 * of occurrences of each mapped value in the array.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param mapper - The `mapper` parameter is a function that takes an item from the input array `arr`
 * and returns a key value. This key value is then used to group and count the occurrences of items in
 * the input array.
 * @returns The function `countBy` returns an object where the keys are the result of applying the
 * `mapper` function to each item in the input array `arr`, and the values are the count of occurrences
 * of each key in the array.
 */
export function countBy<T, K extends PropertyKey>(
  arr: T[],
  mapper: (item: T) => K,
): Record<PropertyKey, number> {
  return arr.reduce((previous, current) => {
    const result = mapper(current);
    previous[result] = previous[result] !== undefined
      ? previous[result] + 1
      : 1;
    return previous;
  }, {} as Record<PropertyKey, number>);
}
