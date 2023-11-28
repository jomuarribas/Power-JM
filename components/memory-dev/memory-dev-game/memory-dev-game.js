export const memoryStart = () => {

  var cards = [];
  for (var i = 0; i < 16; i++) {
    var card = document.createElement("div");
    card.className = "card";
    cards.push(card);
    id = "card" + i;
    card.setAttribute("id", id);
    id = "card" + i + "-back";
    card.setAttribute("data-back", id);
    document.getElementById("cards").appendChild(card);
  }


  var shuffle = function () {
    for (var i = 0; i < cards.length; i++) {
      var j = Math.floor(Math.random() * cards.length);
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  };

  shuffle();

  var flipCard = function (card) {
    var back = card.getAttribute("data-back");
    card.setAttribute("data-back", card.innerHTML);
    card.innerHTML = document.getElementById(back).innerHTML;
  };

  var checkMatches = function () {
    var matches = 0;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].innerHTML == cards[i + 1].innerHTML) {
        matches++;
        cards[i].remove();
        cards[i + 1].remove();
      }
    }
    if (matches == 8) {
      alert("¡Has ganado!");
    }
  };

  var handleClick = function (event) {
    var card = event.target;
    flipCard(card);
    checkMatches();
  };

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", handleClick);
  }
}