/**
 * The `xor` function in TypeScript returns an array containing elements that are present in either the
 * first or second array, but not both.
 * @param {T[]} firstArr - An array of elements to be compared with the elements in the secondArr.
 * @param {T[]} secondArr - An array of elements to be compared with the elements in the firstArr
 * array.
 * @returns The `xor` function is returning an array that contains elements that are present in either
 * the `firstArr` or `secondArr`, but not in both arrays.
 */
export function xor<T>(firstArr: T[], secondArr: T[]): T[] {
  return Array.from(
    new Set(firstArr)
      .union(new Set(secondArr))
      .difference(new Set(firstArr).intersection(new Set(secondArr))),
  )
}
