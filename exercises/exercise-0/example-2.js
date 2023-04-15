function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();

//function calls console.log() method which prints "Hello there" followed by the value for firstName (Moussab)
//firstName is still in Global scope so any function can access it
