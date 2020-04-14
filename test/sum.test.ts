import { sum, sumRanges } from '../scripts/sum'

it('sums array using lamda property', () => {
  const items = [
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 },
  ]

  const actual = sum(items, (i) => i.points)

  expect(actual).toBe(9)
})

it('sums numbers using identity lamda', () => {
  const numbers = [1, 5, 10, 2, 3]

  const actual = sum(numbers)

  expect(actual).toBe(21)
})

it('sums ranges of numbers', () => {
  const nums = [1, -2, 4, 6, 10, 20]
  const range = 5

  const actual = sumRanges(nums)(range)

  expect(actual).toEqual([19, 38])
})
