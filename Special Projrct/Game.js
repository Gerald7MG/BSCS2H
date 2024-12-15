function rollDice() {
    const diceImages = [
        "img/D1.jpeg",
        "img/D2.jpeg",
        "img/D3.jpeg",
        "img/D4.jpeg",
        "img/D5.jpeg",
        "img/D6.jpeg"

    ];

    const dice1 = Math.floor(Math.random() * 6);
    const dice2 = Math.floor(Math.random() * 6);

    
    const roll1 = dice1 + 1;
    const roll2 = dice2 + 1;

    document.getElementById('dice1').src = diceImages[dice1];
    document.getElementById('dice2').src = diceImages[dice2];

    const result = document.getElementById('result');

    if (dice1 > dice2) {
        result.textContent = "Player 1 Wins!";
    } else if (dice2 > dice1) {
        result.textContent = "Player 2 Wins!";
    } else {
        result.textContent = "It's a Tie!";
    }
}