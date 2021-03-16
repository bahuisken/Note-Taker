const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('./db/db.json', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
);