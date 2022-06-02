const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }else {
      console.log('Error, Please type: rock,paper or scissors. !');
    }
  };
  
  const getComputerChoice =  () => {
    const randomNumber =Math.floor(Math.random() *3);
    switch(randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  
  const determineWinner = (userChoice,computerChoice) =>{
    if(userChoice === computerChoice){
        return 'The game is a tie!';
      };
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The Computer Won !' ;
      } else {
        return 'Congratulations, you won!';
      }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Sorry, Computer Won !' ;
      } else {
        return 'Congratulations, you won!'
        };
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Sorry, Computer Won !' ;
      } else {
        return 'Congratulations, you won!';
    }; 
    
  }
  } 
    
  console.log(determineWinner('rock','scissors'));
  
  const playGame = (userChoice) => {
    userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You there: ${userChoice}`);
    console.log(`The Computer choice: ${computerChoice }`);
   console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  
  
  
  