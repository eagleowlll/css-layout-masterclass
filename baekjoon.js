// const str = "Wrong Answer";
// const strdown = str.toLowerCase();
// console.log(strdown);

// const stri = "Wrong Answer";
// const striup = stri.toUpperCase();
// console.log(striup);

function swapcase(str) {
  let swapped = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  return swapped;
}

const str = "CiTy";
const swappedstr = swapcase(str);
console.log(swappedstr);
