// Copy and paste js here
import "./styles.css";

const createDeckButton = document.getElementById("createDeck");
const drawHandButton = document.getElementById("drawHand");
const drawAceOfSpadesButton = document.getElementById("drawAceOfSpades");

let deckId = document.getElementById("deck").textContent;
let handCount = document.getElementById("handCount").textContent;

createDeckButton.addEventListener("click", createDeck);
drawHandButton.addEventListener("click", drawHand);
drawAceOfSpadesButton.addEventListener("click", drawAceOfSpades);

function createDeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Extract the deck ID from the response
      const deckId = data.deck_id;
      // Print the deck ID
      console.log(`Deck ID: ${deckId}`);
      deck.textContent = data.deck_id;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function drawHand() {
  let deckId = document.getElementById("deck").textContent;
  let handCount = document.getElementById("handCount").value;
  fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${handCount}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var hand = document.getElementById("hand");
      hand.innerHTML = "";
      data.cards.forEach((card) => {
        var image = document.createElement("img");
        image.src = card.image;
        hand.appendChild(image);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function drawAceOfSpades() {
  // pretend code
}
