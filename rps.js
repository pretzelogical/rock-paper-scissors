function computerPlay() {
    let decide = Math.floor(Math.random()*3)
    console.log(decide)
    //advanced ai
    if (decide === 0) {return 'rock'}
    else if (decide === 1) {return 'paper'}
    else {return 'scissors'}
}

function playerInput(input){
    const sString = input.toLowerCase()
    if (sString === 'rock' || sString === 'paper' 
    || sString === 'scissors'){
        return sString
    }
}

function whoWon(victor, loser, op1, op2){
    return `${victor} is the victor! beating ${loser} with ${op1} over ${op2}.`
}


function playRound(pinput){
    let pDecide = playerInput(pinput)
    let cDecide = computerPlay()
    console.log(pDecide, cDecide)

    if (pDecide === cDecide)
    {return `${pDecide} and ${cDecide} clash!`}
    else if (pDecide === 'rock' && cDecide === 'scissors')
    {return whoWon('player', 'computer', pDecide, cDecide)}
    else if (pDecide === 'scissors' && cDecide === 'rock')
    {return whoWon('computer', 'player', pDecide, cDecide)}
    else if (pDecide === 'paper' && cDecide === 'rock')
    {return whoWon('player', 'computer', pDecide, cDecide)}
    else if (pDecide === 'rock' && cDecide === 'paper')
    {return whoWon('computer', 'player', pDecide, cDecide)}
    else if (pDecide === 'scissors' && cDecide === 'paper')
    {return whoWon('player', 'computer', pDecide, cDecide)}
    else if (pDecide === 'paper' && cDecide === 'scissors')
    {return whoWon('player', 'computer', pDecide, cDecide)}
    else return 'error!'

}

function game(rounds){
    for (let i = 0; i < rounds; i++){
    console.log(`Round ${i + 1}`)
    let pinput = prompt('Rock Paper Scissors!')
    console.log(playRound(pinput))
    }
}