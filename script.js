let score = 0;

<<<<<<< Updated upstream
function get_user_choice(choice){
    choice = choice.toUpperCase()
    console.log(choice)
    document.querySelector("#playerChoice").textContent = "You chose: " + choice
    return choice
=======
function get_user_choice(){
    var u_choice = ''
    while (u_choice !== 'R' && u_choice !== 'P' && u_choice !== 'S'){
        u_choice = prompt('(R)ock, (P)aper or (S)cissors: ')
        u_choice = u_choice.toUpperCase()
    }
    return u_choice
>>>>>>> Stashed changes
}

function get_computer_choice() {
    let choice = '';
    const num = Math.random() * 10;
    if (num < 3){
        choice = 'R'
    }
    else if (num >= 3 && num < 6){
        choice = 'P'
    }
    else {
        choice = 'S'
    }
    console.log(choice)
    document.querySelector("#computerChoice").textContent = "Computer chooses: " + choice
    return choice
}

function compare_choices(p, c){
    score = score.toString()
    if (p === c){
        document.querySelector("#result").textContent = "You draw!"
        document.querySelector("#score").textContent = score
    }
    else if (p === 'R' && c === 'S'){
<<<<<<< Updated upstream
        document.querySelector("#result").textContent = "You win!"
        score ++
        document.querySelector("#score").textContent = score
        
    }
    else if (p === 'P' && c === 'R'){
        document.querySelector("#result").textContent = "You win!"
        score ++
        document.querySelector("#score").textContent = score
    }
    else if (p === 'S' && c === 'P'){
        document.querySelector("#result").textContent = "You win!"
        score ++
        document.querySelector("#score").textContent = score
    }
    else if (p === 'R' && c === 'P'){
        document.querySelector("#result").textContent = "You loose! Better luck next time!"
        score = 0
        document.querySelector("#score").textContent = score
    }
    else if (p === 'P' && c === 'S'){
        document.querySelector("#result").textContent = "You loose! Better luck next time!"
        score = 0
        document.querySelector("#score").textContent = score
    }
    else {
        document.querySelector("#result").textContent = "You loose! Better luck next time!"
        score = 0
        document.querySelector("#score").textContent = score
    }
}

function play_game(choice){
    let User = get_user_choice(choice)
    let Computer = get_computer_choice()
    compare_choices(User, Computer)
=======
        streak += 1
        console.log('You win! Your streak is:', streak)
        alert('You win! Your streak is:', streak)
        
    }
    else if (p === 'P' && c === 'R'){
        streak += 1
        console.log('You win! Your streak is:', streak)
        alert('You win! Your streak is:', streak)
    }
    else if (p === 'S' && c === 'P'){
        streak += 1
        console.log('You win! Your streak is:', streak)
        alert('You win! Your streak is:', streak)
    }
    else if (p === 'R' && c === 'P'){
        console.log('You loose! Beter luck next time.')
        alert('You loose! Beter luck next time.')
        streak = 0
    }
    else if (p === 'P' && c === 'S'){
        console.log('You loose! Beter luck next time.')
        alert('You loose! Beter luck next time.')
        streak = 0
    }
    else {
        console.log('You loose! Beter luck next time.')
        alert('You loose! Beter luck next time.')
        streak = 0
    }
}

'Main'
while (play === 'y'){
    player = get_user_choice()
    computer = get_computer_choice()
    console.log('Player choice:', player)
    console.log('Computer choice:', computer)
    compare_choices(player, computer)
    play = prompt('Would you like to play again? (y/n) ')
>>>>>>> Stashed changes
}