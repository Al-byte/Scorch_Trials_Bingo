const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let imageElement = document.getElementById('image');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  imageElement.classList.remove('hide');
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  imageElement.src = question.img;
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.remove('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
   img: './images/Alby.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Ava Page.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/Ben.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Chuck.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Gally.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/Greenie.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Grievers.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/James Dashner.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Map Maker Room.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/Maze.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Minho.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/Newt.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Prequel.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Runners.png'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/Sequels.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Serum.png'
  },
  {
    question: 'Is web development fun?',
   img: './images/Shank.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Stung.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Teresa.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/The Blades.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/The Box.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/The Changing.png'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/The Glade.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/The Slammer.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/Thomas.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Trilogy.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/WCKD.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Wes Ball.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/Frypan.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/Blue Darter Network.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/Coach W.jpg'
  }/*,
  {
    question: 'Is web development fun?',
   img: './images/33_fortnite.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/34_chiefs.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/35_seahawks.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/36_wolves.png'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/37_loki.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/38_wandavision.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/39_tfatws.jfif'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/40_stranger_things.jpg'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/41_twd.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/42_ayaotd.jfif'
  },
  {
    question: 'Is web development fun?',
   img: './images/43_harrypotter.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/44_ioa.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/45_newsies.jfif'
  },
  {
    question: 'What is 2 + 2?',
   img: './images/46_wotw.jpg'
  },
  {
    question: 'Who is the best YouTuber?',
    img: './images/47_themazerunner.jpg'
  },
  {
    question: 'Is web development fun?',
   img: './images/48_supermario.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/49_mj.jpg'
  },
  {
    question: 'What is 4 * 2?',
    img: './images/50_spongebob.jpg'
  }*/
]