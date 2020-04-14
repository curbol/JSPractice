export const sum = (array = [], fn = (x) => x) => {
  return array.reduce((sum, item) => (sum += fn(item)), 0)
}

export const sumRanges = (numbers = []) => (range = 0) => {
  if (!numbers || !range || range > numbers.length) throw Error('Invalid input')

  const front = numbers.slice(0, range)
  const remaining = numbers.slice(range)
  const firstAcc = sum(front)
  const summedRanges = remaining.reduce(
    (acc, curr, index) => acc.concat([curr + acc[index] - numbers[index]]),
    [firstAcc]
  )

  return summedRanges
}
