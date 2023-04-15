/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

function changeBG() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

// setTimeout(changeBG, 5000);
let counter = 0;
function incrementByOne() {
  counter++;
}

const changeBGID = setInterval(function () {
  incrementByOne();
  changeBG();
  if (counter === 10) {
    clearInterval(changeBGID);
    console.log("interval was cleared");
  }
}, 1000);
