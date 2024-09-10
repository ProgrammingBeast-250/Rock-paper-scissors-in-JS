let score = 0;

function get_user_choice(choice){
    choice = choice.toUpperCase()
    console.log(choice)
    document.querySelector("#playerChoice").textContent = "You chose: " + choice
    return choice
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
}