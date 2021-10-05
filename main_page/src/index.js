// bug

// She want a jetpack - CLICK -> correct (bug)

// displays first question on window load (initiation)
window.onload = randomQuestion;

// Construct Question List
// also, add people images to the subject images
const QuestionList = [
  { Question: "He ____ a jetpack!", CorrAnswer: "wants", CorrSentence: 'He <u>wants</u> a jetpack!', Image: "../img/He.png"},
  { Question: "She ____ a jetpack!", CorrAnswer: "wants", CorrSentence: 'She <u>wants</u> a jetpack!',  Image: "../img/She.png"},
  { Question: "It ____ a jetpack!", CorrAnswer: "wants", CorrSentence: 'It <u>wants</u> a jetpack!', Image: "../img/It.png" },
  { Question: "I ____ a jetpack!", CorrAnswer: "want", CorrSentence: 'I <u>want</u> a jetpack!',  Image: "../img/I.png" },
  { Question: "You ____ a jetpack!", CorrAnswer: "want", CorrSentence: 'You <u>want</u> a jetpack!',  Image: "../img/You.png" },
  { Question: "They ____ a jetpack!", CorrAnswer: "want", CorrSentence: 'They <u>want</u> a jetpack!',  Image: "../img/They.png" }
];



// idea: increment Question list level for every 10, 25, 35 jetpacks - for 50 jetpacks - give secret link!
// dog booboo , the doggies all want, mr dodge, 


// declare global variable slots: if user choice = randomQuestionAnswer, then display correct and one jetpack 🚀
var randomQuestionAnswer
var randomQuestionNumber 
var randomQuestionNumber
var randomQuestionCorrSentence
var userChoice
var points
var isAttempted = false
var keyboardChoice



// declare HTML areas
var userAnswer = document.querySelector(".user-answer")
var questionDisplay = document.querySelector(".question-display")
var scoreArea = document.querySelector(".score-area")
var imageArea = document.querySelector('.image-display')

// set point and bug icon as variable 

var pointIcon = '🚀'
var oopsIcon = '<span class="grey">🚀</span>'


// Pick a random question
function randomQuestion() {

    userAnswer.innerHTML = ""
    imageArea.innerHTML= ""

  isAttempted = false

  // updating the q. number, answer, question

  randomQuestionNumber = Math.floor(QuestionList.length * Math.random())
  randomQuestion = QuestionList[randomQuestionNumber].Question;
  randomQuestionAnswer = QuestionList[randomQuestionNumber].CorrAnswer;
  randomQuestionCorrSentence = QuestionList[randomQuestionNumber].CorrSentence;

  displayPronounImage()

  // display question
  questionDisplay.innerHTML = randomQuestion + "<p>";

  // displayCorrAnswer(randomQuestionAnswer)


}

function randomQuestion2() {

  userAnswer.innerHTML = ""
  imageArea.innerHTML= ""

isAttempted = false

// updating the q. number, answer, question

randomQuestionNumber = Math.floor(QuestionList.length * Math.random())
randomQuestion = QuestionList[randomQuestionNumber].Question;
randomQuestionAnswer = QuestionList[randomQuestionNumber].CorrAnswer;
displayPronounImage()

// display question
questionDisplay.innerHTML = randomQuestion + "<p>";

// displayCorrAnswer(randomQuestionAnswer)


}



function displayCorrAnswer(){
    document.querySelector(".question-display").innerHTML += "The answer is: " + "<div class='correct-answer'>" + randomQuestionAnswer + "</div>";
  }


// checkAnswe() will check whether the button clicked/ keyboard click matches the correct answer


// bugpoint: Faulty correct with - You WANTS, they WANTS,
// bugpoint: You + click Wants, I + click Wants = reference error

function checkAnswer() {

    if (userChoice === randomQuestionAnswer) {
      console.log('correct!')
      questionDisplay.innerHTML = randomQuestionCorrSentence
      userAnswer.innerHTML += 'Correct!'
      scoreArea.innerHTML += pointIcon
      
    }
    else if (keyboardChoice === randomQuestionAnswer){
      console.log('correct!')
      questionDisplay.innerHTML = randomQuestionCorrSentence
      userAnswer.innerHTML += 'Correct!'
      scoreArea.innerHTML += pointIcon

    }
    else {
      console.log('oopsies!')
      scoreArea.innerHTML += oopsIcon
      displayCorrAnswer();
    }
}





//check if question is already attempted. Only check answer if question is not yet attempted.

function checkAttempted() {
  if (isAttempted == false){ checkAnswer() }
  else { console.log("You've already attempted!")}
  isAttempted = true
}

// insert choice buttons with array. handleClick() fires when choice is made
// https://www.youtube.com/watch?v=RwFeg0cEZvQ forEach array buttons
const choiceDisplay = document.querySelector(".choice-display")
const choices = ['want', 'wants']



// making the choice buttons

var choiceButton = ['']

for (let crap = 0; crap < choices.length; crap++){
  const button = document.createElement('button')
  button.id = choices[crap] 
  button.className = "pushable"
  button.innerHTML = '<span class="shadow"></span><span class="edge"></span><span class="front">' + choices[crap] + '</span>'
  choiceDisplay.appendChild(button)
  button.addEventListener('click', function() {
    userChoice = button.id
    console.log(userChoice)
    handleClick(userChoice)
  })
  // button.addEventListener('click', handleClick)
}

function handleClick(userChoice) {
  console.log('Your click is: ' + userChoice)
  checkAttempted()
}

// //handleClick event after pressing an answer button
// function handleClick(event) {
//   // userChoice2 = event.target.getAttribute('id');　BUG HERE
//   // userChoice is not passing down properly.
//   userChoice =  event.target.id
//   console.log('Your click is: ' + event.target.id)
//   checkAttempted()
// }

// //handleClick event after pressing an answer button
// const handleClick = (event) => {
//   userChoice =  event.target.id
//   console.log('Your choice is ' + userChoice)
//   checkAttempted()
// }



// inserting "next question button"
let nextQButton = document.createElement("button") // <button></button>
nextQButton.className = "pushable"
nextQButton.id = "next-button"
nextQButton.innerHTML = '<span class="shadow"></span><span class="edge"></span><span class="front">👉</span>'
let nextQtnBtn = document.querySelector(".next-question") // <div class="next-question"> </div> 
nextQtnBtn.appendChild(nextQButton) // <div class="next-question"><button> next question! </button></div> 
nextQButton.addEventListener('click', randomQuestion)


// Image display

function displayPronounImage(){

let pronounImage = document.createElement("img")
pronounImage.src = QuestionList[randomQuestionNumber].Image
imageArea.appendChild(pronounImage)

}

//switch cases for button navigation



// handleClick will be processed independently since event.target.id is not available for key clicks
const handleClickFromKeyboard = (keyboardChoice) => {

  console.log(keyboardChoice)

  if (isAttempted == false){ checkAnswer(keyboardChoice) }
  else { console.log("You've already attempted!")}
  isAttempted = true
}


// keyboard clicks
function control(event){

  switch (event.key) {
    case 'ArrowLeft':
      keyboardChoice = choices[0]
      handleClickFromKeyboard(keyboardChoice)
    break
    case 'ArrowRight':
      keyboardChoice = choices[1]
      handleClickFromKeyboard(keyboardChoice)
    break
    case ' ':
      // I made randomQuestion2(), which is a duplicate of randomQuestion() because calling randomQuestion() would result in a TypeError: randomQuestion() is not a function bug. 
      // I am wondering whether there is something to do with the button.addEventListener which triggers randomQuestion. Need some help.
      randomQuestion2();
    break
  }
}

document.addEventListener('keydown', control)




// Favicon Fix: https://koddsson.com/posts/emoji-favicon/

const favicon = document.querySelector("link[rel=icon]");
    
if (favicon) {
  const emoji = favicon.getAttribute("data-emoji");

  if (emoji) {
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillText(emoji, 0, 64);

    favicon.href = canvas.toDataURL();
  }
}
