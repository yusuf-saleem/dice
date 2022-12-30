p1 = Math.floor(Math.random() * 6 + 1);
p2 = Math.floor(Math.random() * 6 + 1);

console.log(p1);
console.log(p2);

console.log(document.getElementById("die1"));
document.getElementById("die1").setAttribute("src", `res/${p1}.png`);
document.getElementById("die2").setAttribute("src", `res/${p2}.png`);

if (p1 > p2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (p1 < p2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Tie!";
}
