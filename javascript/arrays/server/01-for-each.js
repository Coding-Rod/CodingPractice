const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  console.log('for: ',letter);
}

letters.forEach((letter) => console.log('forEach: ', letter));