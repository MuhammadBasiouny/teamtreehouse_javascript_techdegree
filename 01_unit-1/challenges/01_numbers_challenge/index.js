// Collect input from a user
let lowNumber = prompt("Please provide your lowest number?");
let highNumber = prompt("Please provide your highest number?");

// Convert the input to a number
lowNumber = parseInt(lowNumber);
highNumber = parseInt(highNumber);

if (lowNumber && highNumber) {
  // Use Math.random() and the user's number to generate a random number
  let randomNumber =
    Math.floor(Math.random() * (highNumber - lowNumber) + 1) + lowNumber;

  // Create a message displaying the random number
  let message = `${randomNumber} is a random number between ${lowNumber} and ${highNumber}`;
  console.log(message);
} else {
  console.log("You need to provide a number. Try again");
}
