let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");
//setTimeout calls function printNum() which will log the num variable after 3secs
//it will log 42 as the setTimeout is an Async function, by the time the delay is over the rest of the script has already ran including the redeclaration of num
