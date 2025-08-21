/**
 * The `pull` function removes specified values from an array and returns the updated array.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param {unknown[]} valuesToRemove - The `valuesToRemove` parameter is an array containing the values
 * that you want to remove from the original array `arr`.
 * @returns The `pull` function is returning an array of type `T` after removing the values specified
 * in the `valuesToRemove` array from the input `arr` array. The function first converts the input
 * array `arr` into a Set to remove duplicates, then it uses the `difference` method (which is not a
 * standard JavaScript method) to remove the values specified in the `valuesToRemove` array
 */
export function pull<T>(arr: T[], valuesToRemove: unknown[]): T[] {
  return Array.from(new Set(arr).difference(new Set(valuesToRemove)))
}
