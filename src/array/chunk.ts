/**
 * The function "chunk" takes an array and a size parameter, then splits the array into chunks of the
 * specified size.
 * @param {T[]} arr - An array of elements that you want to split into chunks.
 * @param {number} size - The `size` parameter in the `chunk` function represents the number of
 * elements you want in each chunk of the array. This parameter determines how many elements will be
 * grouped together in each subarray.
 * @returns The `chunk` function returns an array of arrays, where each sub-array contains a chunk of
 * the original array `arr` with a maximum size of `size`.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  let chunks: T[][] = [];
  let startIndex = 0;

  while (startIndex < arr.length) {
    chunks.push(arr.slice(startIndex, startIndex + size));
    startIndex = startIndex + size;
  }

  return chunks;
}
