export function memoize<T extends (...args: any) => any>(
  func: T,
  time: number,
) {
  let stamp: number | null = null
  let value: ReturnType<T> | null = null

  return async () => {
    if (!stamp || !value || Date.now() - stamp > time) {
      value = await func()

      stamp = Date.now()

      return value
    } else {
      return value
    }
  }
}
