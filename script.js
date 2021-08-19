const squares = document.querySelectorAll('.grid div')
const displayScore = document.querySelector('.player')
const startBtn = document.querySelector('.start')
const endBtn = document.querySelector('.end')
let numberOfSquares = 9
let pointScore = 0
let setInter

function randomize(){
  let randomNumber = Math.floor((Math.random()*numberOfSquares))
    for(let i=0; i < numberOfSquares; i++){
      if(squares[i].classList.contains('mole')){
        squares[i].classList.remove('mole')
      }
      squares[randomNumber].classList.add('mole')
    }
}

startBtn.addEventListener('click', ()=>{
  setInter = setInterval(randomize, 700)
}) 

endBtn.addEventListener('click', ()=>{
  clearInterval(setInter)
})

squares.forEach(square => {
  square.onclick = function(){
    if(square.classList.contains('mole')){
      pointScore++
     displayScore.innerHTML = pointScore
    }
  }
})


