/**
 * The `differenceWith` function takes two arrays and a custom equality function, returning elements
 * from the first array that are not present in the second array based on the custom equality check.
 * @param {T[]} firstArr - `firstArr` is an array of elements of type `T`.
 * @param {U[]} secondArr - The `secondArr` parameter in the `differenceWith` function is an array of
 * elements of type `U`. This array is used to compare elements from the `firstArr` parameter to find
 * the difference between the two arrays based on the custom equality check provided by the
 * `areItemsEqual` function
 * @param areItemsEqual - The `areItemsEqual` parameter is a function that takes two arguments, an
 * element from the first array (`T`) and an element from the second array (`U`), and returns a boolean
 * value indicating whether the two elements are considered equal based on some comparison logic
 * defined within the function.
 * @returns The `differenceWith` function returns an array of elements from the `firstArr` that do not
 * have a matching element in the `secondArr` based on the comparison function `areItemsEqual`.
 */
export function differenceWith<T, U>(
  firstArr: T[],
  secondArr: U[],
  areItemsEqual: (x: T, y: U) => boolean,
): T[] {
  return firstArr.filter(
    (item) => !secondArr.some((el) => areItemsEqual(item, el)),
  )
}
