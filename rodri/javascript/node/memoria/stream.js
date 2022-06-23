const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

let text = 'hola que tal';
text.split(' ').forEach(function (word) {
    process.stdout.write(word); //stream
});
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// const Transform = stream.Transform;

// function Mayus() {
//     Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = function(chunk, codif, cb) {
//     let chunkMayus = chunk.toString().toUpperCase();
//     this.push(chunkMayus);
//     cb();
// }

// let mayus = new Mayus();

// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout);