let newBuff = Buffer.from('New String');

// console.log(newBuff);

let bufferOne = Buffer.from('This is a buffer example.');
console.log(bufferOne);

let json = JSON.stringify(bufferOne);
console.log(json);

// Convert JSON To BUFFER
let bufferOriginal = Buffer.from(JSON.parse(json).data);
console.log(bufferOriginal);

// Convert BUFFER to UTF-8 String
console.log(bufferOriginal.toString('utf8'));
