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

// Task 1.6

// Number of people and seats per bus
const humanCount = 70;
const busSeats = 24;

// Number of buses (Math.floor function rounds down the division)
const busCount = Math.floor(humanCount / busSeats);

// The number of travellers, who were not able to make it into the bus
const abandonedCount = humanCount % busSeats;

// The number of travellers, who were able to make it into the bus
const travellingCount = humanCount - abandonedCount;

// Output the results
console.log("Kokku on " + humanCount + " reisjat.");
console.log("Ühes bussis on " + busSeats + " kohta.");
console.log("Kokku saabus " + busCount + " bussi.");
console.log("Bussidesse mahtus " + travellingCount + " inimest.");
console.log("Bussidest jäi maha " + abandonedCount + " inimest.");

