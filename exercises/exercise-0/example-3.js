function printGreeting() {
  const firstName = "Moussab";
}

console.log(`Hello there, ${firstName}`);

printGreeting();

//function calls console.log() method which will try and print "Hello there" plus value for firstName
//firstName is inside function printGreeting() so its scope is only inside the function - function scope
//console.log() will return an error as firstName is not accessable and is therefore note defined
