
const fs = require('fs');
const path = require('path');



const day = '04';
const test_input = false;



const d = require(`./days/day${day}`);
console.log(d.run(fs.readFileSync(path.resolve(__dirname, `./${test_input ? 'test_' : ''}inputs/day${day}.txt`), 'utf8')));
