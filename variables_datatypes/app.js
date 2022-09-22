
// 2.4 Istekoht

let soov = prompt("Kas soovite istekohta ise valida (\"ise\") või loosida (\"loos\")? ")
if (soov === "ise") {
    let valik = prompt("Kas soovite istuda akna ääres (\"aken\") või mitte (\"muu\")? ")
    if (valik === "aken") {
        console.log("Valisite isa. Aknakoht.")
    } else if (valik === "muu") {
        console.log("Valisite ise. Vahekäigukoht.")
    }
} else if (soov === "loos") {
    let loos = Math.ceil(Math.random() * 3)
    if (loos === 3) {
        console.log("Istekoht loositi. Aknakoht.")
    } else {
        console.log("Istekoht loositi. Vahekäigukoht.")
    }
}