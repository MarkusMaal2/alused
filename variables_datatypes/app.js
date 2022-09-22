// loogilised op
// AND - &
// OR - ||

// 2.3 Pulss

// Küsi andmed
let vanus = Number(prompt("Sisestage enda vanus: "))
let sugu = prompt("Sisestage enda sugu: ")
let treening = Number(prompt("Sisestage treeningu tüüp: "))

// Arvuta maksimaalne pulss olenevalt soost ja vanusest
let maxPulss = 0
if ((sugu === "M") || (sugu === "m")) {
    maxPulss = 220 - vanus
} else if ((sugu === "N") || (sugu === "n")) {
    maxPulss = 206 - 0.88 * vanus
}

// Arvuta treeningule vastav pulss
let maxTreeninguPulss = 0;
let minTreeninguPulss = 0;
if (treening === 1) {
    minTreeninguPulss = 0.5 * maxPulss
    maxTreeninguPulss = 0.7 * maxPulss
} else if (treening === 2) {
    minTreeninguPulss = 0.7 * maxPulss
    maxTreeninguPulss = 0.8 * maxPulss
} else if (treening === 3) {
    minTreeninguPulss = 0.8 * maxPulss
    maxTreeninguPulss = 0.87 * maxPulss
}

// Väljasta tulemus
minTreeninguPulss = Math.round(minTreeninguPulss)
maxTreeninguPulss = Math.round(maxTreeninguPulss)
console.log(`Pulsisagedus peaks olema vahemikus ${minTreeninguPulss} kuni ${maxTreeninguPulss}`)
