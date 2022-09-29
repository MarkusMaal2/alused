// 3.4 Õunte jagamine
let apples = 14
let dwarfCount = Number(prompt("Mitu pöialpoissi tahab õunu? "))

for (let d = 0; d < dwarfCount; d++) {
    let giveApple = Math.ceil(Math.random() * 2)
    apples -= giveApple
    console.log(giveApple)
}
console.log(`Lumivalgekesele jäi ${apples}`)
