document.body.onload = addElement;

function addElement() {
  // create a new div element
  const buttons = document.createElement("div");
  buttons.id = "buttons";
  buttons.innerHTML = `
  <a id="button-home" href="index.html">Home</a>   
  <a id="button-about-me" href="about-me.html">About Me</a>   
  <a id="button-lessons" href="lessons.html">Lessons</a>
  `
  // add the newly created element and its content into the DOM
  const main = document.getElementById("main");
  const header = document.getElementById("header");
  main.insertBefore(buttons, header);
}
