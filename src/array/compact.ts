/**
 * The `compact` function removes falsy values from an array in TypeScript.
 * @param {T[]} arr - The `arr` parameter in the `compact` function is an array of type `T`, where `T`
 * can be any data type. The function filters out any falsy values such as `false`, `null`,
 * `undefined`, `0`, `0n`, or an empty string `
 * @returns The `compact` function is returning a new array that contains only the truthy values from
 * the input array `arr`. It filters out any values that are `false`, `null`, `undefined`, `0`, `0n`,
 * or an empty string `''`. The return type of the function is an array of values of type `T` excluding
 * the mentioned falsy values.
 */
export function compact<T>(
  arr: T[],
): Exclude<T, false | null | undefined | 0 | 0n | "">[] {
  return arr.filter(Boolean) as Exclude<
    T,
    false | null | undefined | 0 | 0n | ""
  >[];
}
