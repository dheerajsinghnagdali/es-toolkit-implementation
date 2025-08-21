/**
 * The `dropWhile` function removes elements from the beginning of an array as long as a specified
 * condition is met.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param canContinueDropping - The `canContinueDropping` function is a callback function that takes an
 * item of type `T` as a parameter and returns a boolean value. It is used to determine whether
 * dropping should continue for the given item in the array. If the function returns `true`, dropping
 * will continue for that item
 * @returns The `dropWhile` function returns a new array that contains all elements of the input array
 * `arr` starting from the first element for which the `canContinueDropping` function returns `false`.
 */
export function dropWhile<T>(
  arr: T[],
  canContinueDropping: (item: T) => boolean,
): T[] {
  let i = 0;

  for (; i < arr.length; i++) {
    if (!canContinueDropping(arr[i])) break;
  }

  return arr.slice(i);
}
