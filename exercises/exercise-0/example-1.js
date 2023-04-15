const firstName = "Moussab";

function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

printGreeting();

//function calls console.log() method which prints "Hello there" followed by the value for firstName (Moussab) to the screen
//firstName is in the global scope so any function can access it
