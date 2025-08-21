/**
 * The `initial` function in TypeScript returns all elements of an array except the last
 * element.
 * @param {T[]} arr - The `arr` parameter is an array of type `T` that is passed to the
 * `initial` function.
 * @returns The `initial` function takes an array `arr` of type `T` and returns a new array
 * containing all elements of `arr` except the last element. If the input array has more than
 * one element, it returns a new array with all elements except the last one. If the input array
 * has only one element or is empty, it returns an empty array.
 */
export function initial<T>(arr: T[]): T[] {
  if (arr.length > 1) {
    return arr.slice(0, arr.length - 1);
  }

  return [];
}
