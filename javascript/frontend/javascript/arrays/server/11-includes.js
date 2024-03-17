const pets = [ 'cat', 'dog', 'rat' ];

// With for
let includesCat = false;
for (let i = 0; i < pets.length; i++) {
    if (pets[i] === 'cat') {
        includesCat = true;
        break;
    }
}
console.log(includesCat);

// With includes
console.log(pets.includes('cat'));
