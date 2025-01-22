export const canConfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not a string')
  if (typeof to !== 'string') throw new Error('to is not a string')

  const isSameLenght = from.length === to.length
  if (!isSameLenght) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  
  const fromMapObj = from.split('').reduce((acc, letter) => {
    acc[letter] =
    return acc
  }

  return true
};