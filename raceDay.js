// Project -  Race Day

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let age = 18;

if(registeredEarly && age > 18){
  raceNumber += 1000;
}
let checkRegisteration = registeredEarly && age ;

if(registeredEarly && age > 18){
  console.log(`Race will start at 9:30 am & Your Race number is: ${raceNumber}`);
}else if(!registeredEarly && age > 18) {
  console.log(`Race will start at 11:00 am & Your Race number is: ${raceNumber}`);
} else if(age < 18) {
  console.log(`Race will start at 12:30 pm & Your Race number is: ${raceNumber}`);
} else {
  console.log(`Please contact to the Registration desk, Thanks!`);
}

