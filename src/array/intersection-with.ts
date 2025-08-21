/**
 * The function `intersectionWith` takes two arrays and a comparison function, returning an array of
 * elements that are present in both input arrays based on the comparison function.
 * @param {T[]} firstArr - `firstArr` is an array of elements of type `T`.
 * @param {U[]} secondArr - The `secondArr` parameter in the `intersectionWith` function is an array of
 * elements of type `U`. This array is used to compare its elements with the elements of the `firstArr`
 * array to find the intersection based on the provided `areItemsEqual` function.
 * @param areItemsEqual - The `areItemsEqual` parameter is a function that takes two arguments of types
 * `T` and `U`, and returns a boolean value indicating whether the two items are considered equal based
 * on some criteria defined by the function. This function is used to determine the intersection of two
 * arrays `firstArr`
 * @returns The `intersectionWith` function returns an array of elements from the `firstArr` that are
 * also present in the `secondArr` based on the condition specified by the `areItemsEqual` function.
 */
export function intersectionWith<T, U>(
  firstArr: T[],
  secondArr: U[],
  areItemsEqual: (x: T, y: U) => boolean,
): T[] {
  return firstArr.filter((item) =>
    secondArr.some((el) => areItemsEqual(item, el)),
  )
}
