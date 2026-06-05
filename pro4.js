  let random  =parseInt(Math.random()*100+1)
  
   const submitt=document.querySelector('#subt')
    const userinput =document.querySelector('#guessfield')
     const guessslot=document.querySelector('.guesses')
     const lastresult= document.querySelector('.lastresult')
     const lowerorHigh= document.querySelector('.lowOrHi')
     const starOver= document.querySelector('.resultparas')

     const p=  document.createElement('p')

 let prevGuess=[]
 let numguess=1
   let playGame=true

   // taking input from user and store it and sent to next function..

   if(playGame) {
    submitt.addEventListener('click', function(e){
        e.preventDefault()
      const guess=  parseInt(userinput.value)
      validateGuess(guess)
    })
   }
     
 function validateGuess(guess){
    // number chck krega ki woh valid h ke nahi
    if(isNaN(guess)){
        alert('please entre a valid number')
    } else if(guess<1){
        alert('please entre a number greater than one ')
    }else if(guess>100){
        alert('please entre a number  smaller than one')
    } else{
        prevGuess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymessage(`game over.random number was ${random}`)
            endgame()

        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }

 }
  
 function checkGuess(guess){
    // number chck karega agar eqal hua to you win the game low hai toh bolo low h high 
    if(guess===random){
        displaymessage('you gussed right')
        endgame()
    }else if(guess < random){
        displaymessage('number is too low')
    }else if(guess> random){
        displaymessage('number is too high')
    }
 }

   function displayguess(guess){
  // values ko clearn krega and update array and update guess reamaining
   userinput.value=' '
   guessslot.innerHTML += `${guess} ,  `
   numguess ++;
   lastresult.innerHTML=`${11-numguess}`


  }

 function displaymessage(Message){
    // low and hidh mai mess pass krege and print lre

    lowerorHigh.innerHTML=`<h2>${Message}</h2>`
 }
  

function endgame(){
    //values clearn keya  and add kra n new 
    userinput.value=''
    userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">start new game</h2>`
  starOver.appendChild(p)
  newgame();
  playGame=false;


}

function newgame(){
   // new game after over of your guess reamining

   const newgamebutton= document.querySelector('$#newgame')
   newgamebutton.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1)
    prevGuess=[] 
    numguess=1
    guessslot.innerHTML=''
      lastresult.innerHTML=`${11-numguess}`
      userinput.removeAttribute('disabled')
      starOver.removeChild(p )
    playGame=true
   })
}

