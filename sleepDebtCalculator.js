const getSleepHours = (day) => {
  switch(day){
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 6;
      break;
      case 'thursday':
      return 5;
      break
      case 'friday':
      return 4;
      break;
      case 'saturday':
      return 3;
      break;
      case 'sunday':
      return 2;
      break;
      default :
      return 'Error!'
    }
  };
  // console.log(getSleepHours('sunday')); 
  
 const getActualSleepHours = () => {

    return (8+7+6+5+4+3+2);
 };
//  console.log(getSleepHours('monday')); 
//  console.log(getActualSleepHours());


const getIdealSleepHours = (idealHours) => {

  return (idealHours *7);
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours){ 
    console.log(`You've got the perfect amount of sleep !`);
  } else if (actualSleepHours > idealSleepHours){
    console.log(`You've got more ${actualSleepHours - idealSleepHours} more hours of sleep this week `);
  }else if (actualSleepHours < idealSleepHours){
    console.log(`You should get some rest because you slept ${idealSleepHours - actualSleepHours} hour less than you should have this week !`);
  }else{
    console.log(`Error! Something went wrong, check your code  `);

}
};
calculateSleepDebt();

/*
sleepDebtCalculator.js:43 35
sleepDebtCalculator.js:44 56
sleepDebtCalculator.js:55 You should get some rest because you slept 21 hour less than you should have this week !
*/