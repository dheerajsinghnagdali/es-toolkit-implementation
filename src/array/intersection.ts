/**
 * The `intersection` function takes two arrays and returns a new array containing elements that are
 * present in both input arrays.
 * @param {T[]} firstArr - An array of elements of type T.
 * @param {T[]} secondArr - An array of elements of type T, which is the second array to compare for
 * intersection with the first array.
 * @returns The intersection of the two input arrays `firstArr` and `secondArr` is being returned. This
 * means that the returned array contains only the elements that are present in both `firstArr` and
 * `secondArr`.
 */
export function intersection<T>(firstArr: T[], secondArr: T[]): T[] {
  return firstArr.filter((item) => secondArr.includes(item))
}
