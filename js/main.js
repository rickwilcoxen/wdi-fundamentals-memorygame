
const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

const cardOne = cards[0];

cardsInPlay.push('cardOne');

console.log("user flipped queen");

const cardTwo = cards[2];
cardsInPlay.push('cardTwo');

 console.log("user flipped king")

 if (cardsInPlay.length === 2) {
result = (cardsInPlay[0] === cardsInPlay[2])
alert('You found a match!')
 }
 else
 	alert('Sorry, try again.')

