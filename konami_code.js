const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', e => onKeyDownHandler(e));
}
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
  console.log(key)
    if (index === code.length) {
      alert("Screw you Ollie!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}