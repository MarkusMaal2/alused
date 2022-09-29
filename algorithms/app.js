// 3.2 Jänesevanemate mure (while tsükliga)
let lapCount = Number(prompt("Sisesta ringide arv: "))
let carrots = 0
let increment = 2
let lap = 0
while (lap < lapCount - 1) {
    carrots += increment
    //console.log("+" + increment)
    increment += 2
    lap += 2
}
console.log("Porgandite koguarv on " + carrots + ".")
