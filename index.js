// FORK this starter file and save it to your own Repl.it account.
const input = require("readline-sync");

// Take in user input - take in astrouant count
let astronautCount = input.question("What is the astronaut count?");



// Declare and initialize the 12 variables here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
// let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus ="clear";

// Write cåode to generate the LC04 report here:

let theLine = "-------------------------------------"

console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
let dateline = "Date: " + date ;
console.log(dateline);
console.log("Time: " + time );
console.log ();

console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log();

console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celcius:" + fuelTempCelsius + "C");
console.log("* Fuel level: " + (fuelLevel * 100) + "%");
console.log();

console.log(theLine);
console.log("> MASS DATA");
console.log(theLine);
console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass: " + shuttleMassKg + "kg");
console.log("* Total mass: " + totalMassKg + "kg");
console.log();

console.log();
console.log("> FLIGHT PLAN");
console.log(theLine);
console.log("* weather: " + weatherStatus);
console.log();

console.log(theLine);
console.log("> OVERALL STATUS");
console.log(theLine);
console.log("Clear for takeoff: YES");


// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.