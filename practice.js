Array.prototype.sum = function sum(fn = x => x) {
  return this.reduce((sum, item) => sum += fn(item), 0);
}

test('sumLamda', assert => {
  const msg = 'sum should use passed in lamda expression.';
  const items = [
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 }
  ];

  const expected = 9; // sum of points
  const actual = items.sum(i => i.points);

  assert.equal(actual, expected, msg);
  assert.end();
});

test('sumDefault', assert => {
  const msg = 'sum should use default function if none given.';
  const numbers = [1, 5, 10, 2, 3];

  const expected = 21; // sum of numbers
  const actual = numbers.sum();

  assert.equal(actual, expected, msg);
  assert.end();
});

sumRanges = (numbers = []) => (range = 0) =>
{
  if (!numbers || !range || range > numbers.length)
    throw Error("Invalid input");
    
  const front = nums.slice(0, range);
  const remaining = nums.slice(range);
  const firstAcc = front.sum();
  const summedRanges = remaining.reduce((acc, curr, index) => 
    acc.concat([curr + acc[index] - nums[index]]), 
    [firstAcc]);
  
  return summedRanges;
}

const nums = [1, -2, 4, 6, 10, 20];
const range = 5;

console.log(sumRanges(nums)(range));