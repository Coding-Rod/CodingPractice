const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
// numbers.pop(); // Error: Property 'pop' does not exist on type 'readonly number[]'
// numbers.unshift(1); // Error: Property 'unshift' does not exist on type 'readonly number[]'