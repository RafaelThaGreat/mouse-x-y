document.addEventListener("mousemove", function(event) {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("position").innerHTML = "X:" + x + "," + "Y" + y;
  document.body.style.backgroundColor = "#" + x + y;
  document.getElementById("position").style.color = "white";
  document.getElementById("position").style.fontSize = "xx-large";
});
