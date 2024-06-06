const crypto = require('crypto');

const publicKey = '8d7b68b96859dc0c2c114edc9d814f0d';
const privateKey = '7037a52db5ba626db1375d2a437335227c0b0495';
const ts = '1'; // Use o timestamp adequado aqui

// Concatenando os parâmetros
const toBeHashed = ts + privateKey + publicKey;

// Calculando o hash MD5
const hash = crypto.createHash('md5').update(toBeHashed).digest('hex');

console.log('Hash MD5:', hash);
