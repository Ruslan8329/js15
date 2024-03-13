function generateRandomNumber(callback) {
  let randomNum = Math.random();
  callback(randomNum);
  if (Math.random() > 0.5) {
    return randomNum > 0.5;
  }
}
let generateExample = generateRandomNumber(function (result) {
  console.log("Число", result);
});
console.log("result", generateExample);

////////////////////////////////////////////////////////////////////////////////////////////////

function checkEven(number, callback) {
  let even = number % 2 === 0;
  callback(even);
}
checkEven(2, function (exampleEven) {
  console.log("result", exampleEven);
});

////////////////////////////////////////////////////////////////////////////////////

let massive = [45, 2, -45, -67, -88, 90, 0];
let positiveNum = [];

massive.forEach(function (number) {
  if (number >= 0) {
    positiveNum.push(number);
  }
});

console.log("result", positiveNum);

//////////////////////////////////////////////////////////////////////////////////////////////

let strings = ["monday", "saturday", "bootle", "phone", "car"];

let lenght = [];

strings.forEach(function (string) {
  lenght.push(string.length);
});
console.log(lenght);
