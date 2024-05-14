const crypto = require('crypto');

// Generate a 256-bit (32-byte) random secret key
const secret = crypto.randomBytes(8).toString('hex');

console.log(secret);