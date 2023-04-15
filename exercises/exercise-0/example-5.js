let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

//return [50, 50, 50, 50, 50]
//function multiplyBy5() does not have a num variable declared so it checks the global scope and finds num variable with value 10. since map() method will take an array and do a set of instruction to each item, an array of 50s will be returned as num is 10 for each iteration.
