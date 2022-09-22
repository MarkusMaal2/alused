// 2.5 Spämm

suurus = Number(prompt("Sisestage kirja suurus: "))
teema = prompt("Sisestage kirja teema pealkiri: ")
kaasasfail = prompt("Kas kirjaga on kaasas fail? ")
if (((kaasasfail === "jah") && suurus > 1) || (teema === "")) {
    console.log("Kiri on spämm");
} else {
    console.log("Kiri ei ole spämm");
}