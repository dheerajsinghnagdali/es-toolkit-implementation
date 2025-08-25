/**
 * The `differenceBy` function takes two arrays and a mapper function, and returns an array of elements
 * from the first array that are not present in the second array based on the mapper function.
 * @param {T[]} firstArr - `firstArr` is an array of elements of type `T`.
 * @param {U[]} secondArr - The `secondArr` parameter in the `differenceBy` function represents an
 * array of elements of type `U`. This array is used to compare elements from the `firstArr` parameter
 * to determine the difference between the two arrays based on the mapping function provided.
 * @param mapper - The `mapper` parameter in the `differenceBy` function is a function that takes a
 * value of type `T` or `U` as input and returns a value. This function is used to map the elements of
 * the arrays `firstArr` and `secondArr` before comparing them to find
 * @returns The `differenceBy` function returns an array of elements from the `firstArr` that are not
 * present in the `secondArr` after applying the `mapper` function to each element in both arrays.
 */
export function differenceBy<T, U>(
  firstArr: T[],
  secondArr: U[],
  mapper: (value: T | U) => void,
): T[] {
  return firstArr.filter(
    (item) => !secondArr.some((el) => mapper(item) === mapper(el)),
  )
}
