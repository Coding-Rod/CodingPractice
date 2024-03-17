const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const flat = matrix.flat(2);
console.log(flat);

// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.
const flatMap = matrix.flatMap((row) => row.map((cell) => cell * 2));
console.log(flatMap);