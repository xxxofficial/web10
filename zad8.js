const numbers = [4, 2, 15, 1];

function multiplyByThree(x) {
  return x * 3;
}
function isGreaterThanTen(x) {
  return x > 10;
}

const result = numbers
  .map(multiplyByThree)
  .filter(isGreaterThanTen);

console.log(result); 

