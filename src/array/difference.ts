/**
 * The `difference` function takes two arrays and returns a new array containing elements that are
 * present in the first array but not in the second array.
 * @param {T[]} firstArr - An array of elements of type T.
 * @param {T[]} secondArr - An array of elements that you want to filter out from the firstArr.
 * @returns The `difference` function returns an array containing elements that are present in the
 * `firstArr` but not in the `secondArr`.
 */
export function difference<T>(firstArr: T[], secondArr: T[]): T[] {
  return firstArr.filter((item) => !secondArr.includes(item));
}
