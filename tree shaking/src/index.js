// import * as main from './module';


const {sha256} = require('crypto');
// console.log(sha256('1'));
const hashDigest = sha256('hello world1');
console.log(hashDigest);
// console.log(main.module.a)
// console.log(main.module.b)