const input = require("fs").readFileSync("test.txt").toString().split(" ");

let swapped = "";

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === char.toUpperCase()) {
    swapped += char.toLowerCase();
  } else {
    swapped += char.toUpperCase();
  }
}

console.log(swapped);
