/**
 * The `shuffle` function in TypeScript takes an array and returns a new array with its elements
 * shuffled randomly.
 * @param {T[]} arr - The `arr` parameter in the `shuffle` function is an array of elements of type `T`
 * that you want to shuffle.
 * @returns The `shuffle` function returns a shuffled version of the input array `arr`.
 */
export function shuffle<T>(arr: T[]) {
  const result = [...arr]
  let i = arr.length - 1
  while (i > 1) {
    const randomIndex = Math.ceil(Math.random() * i - 1)
    ;[result[i], result[randomIndex]] = [result[randomIndex], result[i]]
    i--
  }
  return result
}
