/**
 * The function `isSubset` checks if one array is a subset of another array using Sets in TypeScript.
 * @param {T[]} superset - An array of elements of type T that potentially contains all elements of the
 * subset.
 * @param {U[]} subset - Subset is an array of elements that you want to check if it is a subset of
 * another array (superset).
 * @returns The function isSubset is returning a boolean value, which indicates whether the subset
 * array is a subset of the superset array.
 */
export function isSubset<T, U>(superset: T[], subset: U[]): boolean {
  return new Set(subset).isSubsetOf(new Set(superset))
}
