/*
Fizzbuzz problem:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of 3 and 5, print "FizzBuzz"
- Otherwise, print the number
*/

export const fizzbuzz = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number))
    throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0)
        output += word
    })

  return output === '' ? number : output
};