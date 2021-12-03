
const fs = require('fs');
const path = require('path');



const day = '3';




const d = require(`./days/day${day}`);
console.log(d.run(fs.readFileSync(path.resolve(__dirname, `./inputs/day${day}.txt`), 'utf8')));
