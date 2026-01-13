// 主入口文件
function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

// 新增：乘法功能
function multiply(a, b) {
  return a * b;
}

module.exports = { greet, add, multiply };
