// displays first question on window load (initiation)
window.onload = randomQuestion;

// Construct Question List
// also, add people images to the subject images
const QuestionList = [
  { Question: "He ____ a jetpack!", CorrAnswer: "wants", Image: "../img/He.png"},
  { Question: "She ____ a jetpack!", CorrAnswer: "wants", Image: "../img/She.png"},
  { Question: "It ____ a jetpack!", CorrAnswer: "wants",Image: "../img/It.png" },
  { Question: "I ____ a jetpack!", CorrAnswer: "want", Image: "../img/I.png" },
  { Question: "You ____ a jetpack!", CorrAnswer: "want", Image: "../img/You.png" },
  { Question: "They ____ a jetpack!", CorrAnswer: "want", Image: "../img/They.png" }
];



// idea: increment Question list level for every 10, 25, 35 jetpacks - for 50 jetpacks - give secret link!
// dog booboo , the doggies all want, mr dodge, 


// declare global variable slots: if user choice = randomQuestionAnswer, then display correct and one jetpack 🚀
var randomQuestionAnswer
var randomQuestionNumber 
var randomQuestionNumber
var userChoice
var points
var isAttempted = false



// declare HTML areas
var userAnswer = document.querySelector(".user-answer")
var questionDisplay = document.querySelector(".question-display")
var scoreArea = document.querySelector(".score-area")
var imageArea = document.querySelector('.image-display')


// Pick a random question
function randomQuestion() {

    userAnswer.innerHTML = ""
    imageArea.innerHTML= ""
  

  isAttempted = false

  // updating the q. number, answer, question

  randomQuestionNumber = Math.floor(QuestionList.length * Math.random())
  randomQuestion = QuestionList[randomQuestionNumber].Question;
  randomQuestionAnswer = QuestionList[randomQuestionNumber].CorrAnswer;
  displayPronunImage()

  // display question
  questionDisplay.innerHTML = randomQuestion + "<p>";

  // displayCorrAnswer(randomQuestionAnswer)


}


function displayCorrAnswer(){
    document.querySelector(".question-display").innerHTML += "The answer is: " + randomQuestionAnswer;
  }


// checkAnswe() will check whether the button clicked/ keyboard click matches the correct answer

function checkAnswer() {

    if (userChoice || keyboardChoice === randomQuestionAnswer) {
      console.log('correct!')
      userAnswer.innerHTML += 'Correct!'
      scoreArea.innerHTML += '🚀'
    }
    else {
      console.log('oopsies!')
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

//handleClick event after pressing an answer button
const handleClick = (event) => {
  userChoice =  event.target.id
  checkAttempted()
}


// making the choice buttons

var choiceButton = ['']

for (let crap = 0; crap < choices.length; crap++){
  const button = document.createElement('button')
  button.id = choices[crap] // 
  button.className = "choice-button"
  button.innerHTML = choices[crap]
  choiceDisplay.appendChild(button)
  button.addEventListener('click', handleClick)
}




// inserting "next question button"
let nextQButton = document.createElement("button") // <button></button>
nextQButton.innerHTML = "👉" // <button> next question! </button>
let nextQtnBtn = document.querySelector(".next-question") // <div class="next-question"> </div> 
nextQtnBtn.appendChild(nextQButton) // <div class="next-question"><button> next question! </button></div> 
nextQButton.addEventListener('click', randomQuestion)


// Image display

function displayPronunImage(){

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
    console.log("You pressed space!")
    randomQuestion();
    break
  }
}

document.addEventListener('keydown', control)