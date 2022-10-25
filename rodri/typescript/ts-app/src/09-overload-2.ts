 // Nico => [N, i, c, o] => String => String[]
 // [N, i, c, o] => Nico => String[] => String

// Function Overload
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

// export function parseStr(input: string | string[]): string[] | string {
//   if (typeof input === 'string') {
//     return input.split('');
//   }
//   return input.join('');
// }

export function parseStr(input: unknown): unknown {
  if (typeof input === 'string') {
    return input.split('');
  }
  if (Array.isArray(input)) {
    return input.join('');
  }
}

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
console.log('rtaStr', rtaStr);

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('rtaArray', rtaArray);