const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const a = input.split(" ").map(Number);
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i] * a[i];
}
const result = sum % 10;

console.log(result);
