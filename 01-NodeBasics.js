/** CommonJS
 * ES module
 */


// 1), 2)
// const abc = require('./02-Modules');

// 3)
const { people, person } = require('./02-Modules');
const os = require('os');
const path = require('path');
// 1)
// console.log(abc);

// 2)
// console.log(abc.people, abc.person);

// 3)
console.log(people, person);

// console.log(os);
console.log(path);
console.log(os.platform());

// ----------------------------------------------------------
// console.log(global);

// globalThis.setInterval( () => { 
// console.log("Repeat any sec!!!");
// }, 1000);

// console.log(__dirname);
// /home/benji/Documentos/Node/MERNStackCourse2022/02-SomeNodeBasic

// console.log(__filename);
// /home/benji/Documentos/Node/MERNStackCourse2022/02-SomeNodeBasic/01-NodeBasics.js
