let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);

//line 6 will return "The x coordinate is 10"
//line 7 will return "The y coordinate is 3"
//line 11 will return an error as the varible targetted is within the function scope
