/**
 * The function `intersectionBy` takes two arrays and a mapper function, and returns a new array
 * containing elements that are present in both input arrays based on the result of applying the mapper
 * function to each element.
 * @param {T[]} firstArr - The `firstArr` parameter is an array of elements of type `T`.
 * @param {T[]} secondArr - The `secondArr` parameter in the `intersectionBy` function refers to the
 * second array of elements that you want to compare with the elements in the first array (`firstArr`).
 * The function will return an array containing elements that are present in both `firstArr` and
 * `secondArr` based on
 * @param mapper - The `mapper` parameter is a function that takes an item of type `T` as input and
 * returns a value of type `unknown`. This function is used to map each item in the arrays `firstArr`
 * and `secondArr` to a common value for comparison during the intersection operation.
 * @returns The `intersectionBy` function returns an array containing elements that are present in both
 * `firstArr` and `secondArr`, based on the result of applying the `mapper` function to each element.
 */
export function intersectionBy<T>(
  firstArr: T[],
  secondArr: T[],
  mapper: (item: T) => unknown,
) {
  return firstArr.filter((item) =>
    secondArr.some((el) => mapper(el) === mapper(item)),
  )
}
