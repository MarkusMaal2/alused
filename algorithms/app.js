// 3.2 Jänesevanemate mure
lapCount = Number(prompt("Sisesta ringide arv: "))
carrots = 0;
increment = 2;
for (let l = 0; l < lapCount - 1; l += 2) {
    carrots += increment;
    console.log("+" + increment)
    increment += 2;
}
console.log("Porgandite koguarv on " + carrots + ".")
