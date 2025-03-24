const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const output = [];

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  output.push(a + b);
}

console.log(output.join("\n"));
