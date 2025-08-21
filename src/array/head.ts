/**
 * The `head` function in TypeScript returns the first element of an array.
 * @param {T[]} arr - The `arr` parameter is an array of type `T`, which means it can hold elements of
 * any data type. The `head` function returns the first element of the array.
 * @returns The `head` function is returning the first element of the input array `arr`.
 */
export function head<T>(arr: T[]): T | undefined {
  return arr[0];
}
