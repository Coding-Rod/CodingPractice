 // Nico => [N, i, c, o] => String => String[]
 // [N, i, c, o] => Nico => String[] => String

 function parseStr(input: string | string[]): string[] | string {
  if (typeof input === 'string') {
    return input.split('');
  }
  return input.join('');
}

const rtaArray = parseStr(['N', 'i', 'c', 'o']);
console.log('rtaArray', rtaArray);

const rtaString = parseStr('Nico');
console.log('rtaString', rtaString);