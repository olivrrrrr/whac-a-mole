(function(){
     
    let module = {

        init: function(){
            this.cacheDom()
            this.bindEvents()
            this.addPoints()

        }, 
        cacheDom: function(){
            this.squares = document.querySelectorAll('.grid div') 
            this.startBtn = document.querySelector('.start')
            this.endBtn = document.querySelector('.end')
            this.numberOfSquares = 9
        },
        bindEvents: function(){
            this.startBtn.addEventListener('click', this.start.bind(this)) 
        },
        start: function(){
            setInterval(this.moleRandomizer.bind(this), 700)
        }, 
        moleRandomizer: function(){
            let randomNumber = Math.floor((Math.random()* this.numberOfSquares))
            for(let i=0; i < this.numberOfSquares; i++){
                if(this.squares[i].classList.contains('mole')){
                    this.squares[i].classList.remove('mole')
                }
            this.squares[randomNumber].classList.add('mole')
            }
        }, 
        countDownTimer: function(){
            let initialTime = 60
        },
        addPoints: function(){
            let pointsScored = 0
            let displayScore = document.querySelector('.player')
            this.squares.forEach(square => {
                  square.onclick = function(){
                    if(square.classList.contains('mole')){
                       pointsScored++ 
                       displayScore.innerHTML = pointsScored
                    }
                }
            })
        }
    }
      module.init()
})()

// let module = (function(){
     
//                 let squares = document.querySelectorAll('.grid div') 
//                 let startBtn = document.querySelector('.start')
//                  let numberOfSquares = 9
            
            
//                 startBtn.addEventListener('click', start) 
            
//                 function start(){
//                     setInterval(moleRandomizer,700)
//                 } 

//                 function moleRandomizer(){
//                     let randomNumber = Math.floor((Math.random()* numberOfSquares))
//                     for(let i=0; i < numberOfSquares; i++){
//                         if(squares[i].classList.contains('mole')){
//                             squares[i].classList.remove('mole')
//                         }
//                     squares[randomNumber].classList.add('mole')
//                     }
//                 }

//                 function addPoints(){
//                     let pointsScored = 0
//                     let displayScore = document.querySelector('.player')
//                     squares.forEach(square => {
//                         square.onclick = function(){
//                             if(square.classList.contains('mole')){
//                                 pointsScored++ 
//                                 console.log('hello')
//                             }
//                         }
//                     })
//                 }

//             return {
//                  addPoints
//                 }
          
//     })()
    