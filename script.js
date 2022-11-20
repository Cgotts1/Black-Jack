let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let startBtn = document.querySelector("#start-btn");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let newBtn = document.querySelector("#newcard-btn");

let player = {
    name: "CGotts1",
    chips: 145
}


let playerEl = document.querySelector("#player-el")
playerEl.textContent = "Player: " + player.name + " | " + "$ " + player.chips

console.log(cards)


function getRandomCard(){
    let chooseRandom = Math.floor(Math.random() * 13) + 1
    if(chooseRandom === 1){
        return 11
    } else if(chooseRandom === 11 || chooseRandom === 12 || chooseRandom === 13){
        return 10
    }else {
        return chooseRandom
    }
    
}

startBtn.addEventListener("click", startGame);
function startGame() {
 isAlive = true;
 let firstCard = getRandomCard(); //or create random card function
 let secondCard = getRandomCard();
 cards = [firstCard, secondCard];
 sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";         // keeps the previous cards from being duplicated when rendered
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  //Has BlackJAck

  console.log(hasBlackJack);
  console.log(isAlive);
  console.log(message);
  console.log(sum);
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

newBtn.addEventListener("click", newCard);

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
        console.log(card);
        console.log(sum);
    } else {
        return
    }
}