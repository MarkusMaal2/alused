// 3.3 Täringumäng
const diceSides = 6
let diceCount = Number(prompt("Täringute arv: "))
let turn = 0
while (turn < diceCount) {
    let diceValue = Math.floor(Math.random() * diceSides + 1)
    console.log(diceValue)
    turn++
}