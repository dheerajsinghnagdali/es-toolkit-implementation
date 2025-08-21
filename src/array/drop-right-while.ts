/**
 * The function `dropRightWhile` removes elements from the end of an array until a condition is no
 * longer met.
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @param canContinueDropping - The `canContinueDropping` parameter is a function that takes an item of
 * type `T` as its argument and returns a boolean value. This function is used to determine whether
 * dropping should continue for the given item in the array. If the function returns `true`, dropping
 * will continue; if it
 * @returns The function `dropRightWhile` returns a new array that includes all elements from the
 * original array `arr` up to (and including) the last element for which the `canContinueDropping`
 * function returns `false`.
 */
export function dropRightWhile<T>(
  arr: T[],
  canContinueDropping: (item: T) => boolean,
): T[] {
  let i = arr.length - 1;

  for (; i >= 0; i--) {
    if (!canContinueDropping(arr[i])) break;
  }

  return arr.slice(0, i + 1);
}
