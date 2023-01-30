const users = [
    { id: 1, name: 'John Doe', tags: ['admin', 'editor'] },
    { id: 2, name: 'Jane Doe', tags: ['admin'] },
    { id: 3, name: 'Sam Smith', tags: ['editor', 'accountant'] },
    { id: 4, name: 'Peter Parker', tags: ['admin', 'editor'] },
    { id: 5, name: 'Clark Kent', tags: ['editor'] },
    { id: 6, name: 'Bruce Wayne', tags: ['admin'] },
];

// With map and flat
const tags = users.map((user) => user.tags).flat();
console.log(tags);

// With reduce
const tags2 = users.reduce((acc, user) => [...acc, ...user.tags], []);
console.log(tags2);

// With flatMap
const tags3 = users.flatMap((user) => user.tags);
console.log(tags3);