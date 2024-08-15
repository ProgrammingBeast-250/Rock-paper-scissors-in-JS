var player = ''
var computer = ''
var streak = 0
var play = 'y'

function get_user_choice(){
    var u_choice = ''
    while (u_choice != 'R' && u_choice != 'P' && u_choice != 'S'){
        u_choice = prompt('(R)ock, (P)aper or (S)cissors: ')
        u_choice = u_choice.toUpperCase()
    }
    return u_choice
}

function get_computer_choice() {
    var choice = ''
    var num = Math.random() * 10
    if (num < 3){
        choice = 'R'
    }
    else if (num >= 3 && num < 6){
        choice = 'P'
    }
    else {
        choice = 'S'
    }
    return choice
}

function compare_choices(p, c){
    if (p === c){
        console.log('Draw')
    }
    else if (p === 'R' && c === 'S'){
        streak += 1
        console.log('You win! Your streak is:', streak)
        
    }
    else if (p === 'P' && c === 'R'){
        streak += 1
        console.log('You win! Your streak is:', streak)
    }
    else if (p === 'S' && c === 'P'){
        streak += 1
        console.log('You win! Your streak is:', streak)
    }
    else if (p === 'R' && c === 'P'){
        console.log('You loose! Beter luck next time.')
        streak = 0
    }
    else if (p === 'P' && c === 'S'){
        console.log('You loose! Beter luck next time.')
        streak = 0
    }
    else {
        console.log('You loose! Beter luck next time.')
        streak = 0
    }
}

'Main'
while (play == 'y'){
    player = get_user_choice()
    computer = get_computer_choice()
    console.log('Player choice:', player)
    console.log('Computer choice:', computer)
    compare_choices(player, computer)
    play = prompt('Would you like to play again? (y/n) ')
}