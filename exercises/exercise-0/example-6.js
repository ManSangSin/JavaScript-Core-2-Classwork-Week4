let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

//The x coordinate is 2 will be returned
//An error will be returned for line 7 as y variable has not been defined
//point varible is not called in the function so not used
