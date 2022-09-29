// 3.2 Jänesevanemate mure (while tsükliga)
let lapCount = Number(prompt("Sisesta ringide arv: "))
let carrots = 0
let increment = 0
let lap = 0
while (lap <= lapCount) {
    //console.log(`${lap}. ring`)
    if (lap % 2 === 0) {
        carrots += increment
        //console.log(`+${increment} porgandit`)
        increment += 2
        lap += 2
    }
}
console.log(`Porgandite koguarv on ${carrots}.`)
