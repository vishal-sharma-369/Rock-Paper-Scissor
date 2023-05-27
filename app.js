let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ['rock' , 'paper', 'scissors'];

window.onload = function()
{
    for(let i = 0;i<3;i++)
    {
        let choice = document.createElement('img');
        choice.id = choices[i];

        choice.src = './images/'+ choices[i] + '.png';
        choice.addEventListener("click" , selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice()
{
    you = this.id;
    document.getElementById("your-choice").src = './images/' + you + '.png';

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById('opponent-choice').src = './images/' + opponent + '.png';

    if(opponent == you)
    {
        yourScore += 1;
        opponentScore += 1;
    }
    else if(you == "rock")
    {
        if(opponent == "scissors")
        {
            yourScore += 1;
        }
        else if(opponent == "paper")
        {
            opponentScore += 1;
        }
    }
    else if(you == "paper")
    {
        if(opponent == "rock")
        {
            yourScore += 1;
        }
        else if(opponent == "scissors")
        {
            opponentScore += 1;
        }
    }
    else
    {
        if(opponent == "paper")
        {
            yourScore += 1;
        }
        else if(opponent == "rock")
        {
            opponentScore += 1;
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
