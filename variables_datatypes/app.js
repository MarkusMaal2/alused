/**
 * Data types
 *
 * primitives - integer, float, String
 * objects
 *
 * variables:
 * let variableName = value; // mutable
 * const variableName = value; //immutable
 */

// Task 1.4

const name = prompt("Sisestage oma nimi: ");
const allowedSpeed = Number(prompt("Sisestage lubatud kiirus: "));
const actualSpeed = Number(prompt("Sisestage tegelik kiirus: "));
let fine = Math.min(190, (actualSpeed - allowedSpeed) * 3);
fine = Math.max(0, fine);
console.log(name + ", kiiruse ületamise eest on teie trahv " + String(fine) + " eurot.");
