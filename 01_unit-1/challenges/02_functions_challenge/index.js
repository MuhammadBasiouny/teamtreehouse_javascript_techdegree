/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function getRandomNumber(upper, lower) {
  if (isNaN(upper) || isNaN(lower)) {
    throw Error("Both argument must be numbers");
  } else {
    let randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
  }
}

// Call the function and pass it different values

console.log(getRandomNumber(50, 70));
