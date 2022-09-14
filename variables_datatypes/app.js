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

// Task 1.5

const apCount = Number(prompt("Sisestage ainepunktide arv: "));
const weekCount = Number(prompt("Sisestage nädalate arv: "));
const totalTime = Math.round(apCount * 26 / weekCount);
console.log(totalTime);
