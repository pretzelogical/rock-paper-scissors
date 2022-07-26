let display = document.querySelector('#gametext')
const buttons = document.querySelectorAll('button')


function getComputerInput() {
  let decide = Math.floor(Math.random()*3)
  //advanced ai
  if (decide === 0) {return 'rock'}
    else if (decide === 1) {return 'paper'}
    else {return 'scissors'}
  }
  
  function getPlayerInput(input){
    const sString = input.toLowerCase()
    if (sString === 'rock' || sString === 'paper' 
    || sString === 'scissors'){
      return sString
    }
}

function getWin(victor, loser, op1, op2){
  return `${victor} is the victor! beating ${loser} with ${op1} over ${op2}.`
}


function playRound(pinput){
  let pDecide = getPlayerInput(pinput)
  let cDecide = getComputerInput()
  if (pDecide === cDecide)
  {
    return `${pDecide} and ${cDecide} clash!`
  }
  else if (pDecide === 'rock' && cDecide === 'scissors')
  {
    return getWin('player', 'computer', pDecide, cDecide)
  }
  else if (pDecide === 'scissors' && cDecide === 'rock')
  {
    return getWin('computer', 'player', pDecide, cDecide)
  }
  else if (pDecide === 'paper' && cDecide === 'rock')
  {
    return getWin('player', 'computer', pDecide, cDecide)
    }   
    else if (pDecide === 'rock' && cDecide === 'paper')
    {
      return getWin('computer', 'player', pDecide, cDecide)
    }
    else if (pDecide === 'scissors' && cDecide === 'paper')
    {
      return getWin('player', 'computer', pDecide, cDecide)
    }
    else if (pDecide === 'paper' && cDecide === 'scissors')
    {
      return getWin('player', 'computer', pDecide, cDecide)
    }
    else return 'error!'
    
  }
  
  function playGame (e) {
    console.log(e.target.id)
    if (e.target.id === 'rock'){
      pinput = 'rock'
    }
    else if (e.target.id === 'paper') {
      pinput = 'paper'
    }
    else{
      pinput = 'scissors'
    }
    display.textContent = playRound(pinput);
  }
  
  buttons.forEach((button) => {
    button.addEventListener('click', playGame)
  })
  
  
// function game(rounds){
//     for (let i = 0; i < rounds; i++){
//     console.log(`Round ${i + 1}`)
//     let pinput = prompt('Rock Paper Scissors!')
//     console.log(playRound(pinput))
//     }
//}