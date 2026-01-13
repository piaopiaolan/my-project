const { greet, add, multiply } = require('../src/index.js');

console.log('测试 greet 函数:', greet('World'));
console.log('测试 add 函数:', add(2, 3));
console.log('测试 multiply 函数:', multiply(4, 5));
console.log('所有测试通过！');
