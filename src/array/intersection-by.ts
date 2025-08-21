/**
 * The intersectionBy function takes two arrays and a mapper function, and returns a new array
 * containing elements that are present in both input arrays based on the mapper function.
 * @param {T[]} firstArr - `firstArr` is an array of elements of type `T`.
 * @param {U[]} secondArr - The `secondArr` parameter is an array of elements of type `U`.
 * @param mapper - The `mapper` parameter is a function that takes an item from the arrays `firstArr`
 * and `secondArr` as input and returns a value used for comparison. This function is used to map each
 * item to a common value for comparison when finding the intersection between the two arrays.
 * @returns The `intersectionBy` function returns an array containing elements that are present in both
 * `firstArr` and `secondArr`, based on the result of applying the `mapper` function to each element in
 * both arrays.
 */
export function intersectionBy<T, U>(
  firstArr: T[],
  secondArr: U[],
  mapper: (item: T | U) => unknown,
) {
  return firstArr.filter((item) =>
    secondArr.some((el) => mapper(el) === mapper(item)),
  )
}
