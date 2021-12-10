// 1. Create a multidimensional array to hold quiz questions and answers

let arrayOfQuestions = [
  ['What year was JavaScript created?', '1995'],
  ['How many legs does an insect have?', '4'],
  ['How many moons do you have in your solar system', '8'],
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
let arrayLength = arrayOfQuestions.length;

for (let i = 0; i < arrayLength; i++) {
  let question = arrayOfQuestions[i][0];
  let answer = arrayOfQuestions[i][1];
  let questioninput = prompt(question);
  if (questioninput === answer) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user

let html = `
  <h1> You got ${correctAnswers} question(s) correct</h1>
<h2>You got these questions right:</h2>
<ol>
  ${createListItems(correct)}
</ol>

<h2>You got these questions wrong:</h2>
<ol>
  ${createListItems(incorrect)}
</ol>
`;
document.querySelector('main').innerHTML = html;
