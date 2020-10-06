window.onload = function() {
  var btnStart = document.getElementById("start");
  btnStart.onclick = play;

  var btnStart = document.getElementById("stop");
  btnStart.onclick = stop;

  var btnTurbo = document.getElementById("turbo");
  btnTurbo.onclick = changeSpeed;

  var selFontSize = document.getElementById("fontsize");
  selFontSize.onchange = changeFont;

  var selAnimation = document.getElementById("animation");
  selAnimation.onchange = loadFrames;
}

var frames;
var iFrame = 0;
var intervalId = null;
var SPEED = 250;  //initial speed;

function loadFrames() {
  var animation = document.getElementById("animation").value;
  frames = ANIMATIONS[animation].split("=====\n");
}

function play() {
  if(document.getElementById("turbo").checked) {
    SPEED = 50;
  }
  
  intervalId = setInterval(playFrame,SPEED);
  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;
  document.getElementById("stop").disabled = false;
}

function stop() {
  clearInterval(intervalId);
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;  
  document.getElementById("animation").disabled = false;
}

function playFrame() {
  if(iFrame<frames.length) {
    displayFrame();
    iFrame++;
  } else {
    iFrame = 0;
  }
}

function displayFrame() {
  var screen = document.getElementById("text-area");
  screen.value = frames[iFrame];
}

function createInterval(interval) {
  clearInterval(intervalId);
  intervalId = setInterval(playFrame,SPEED);
}

function changeSpeed() {
  if(document.getElementById("turbo").checked) {
    //console.log("Speed up");
    SPEED = 50;
    clearInterval(intervalId);
    intervalId = setInterval(playFrame,SPEED);
  } else {
    //console.log("Speed down");
    SPEED = 250;
    clearInterval(intervalId);
    intervalId = setInterval(playFrame,SPEED);
  }
}

var fonts = {
  "Tiny": "7pt",
  "Small": "10pt",
  "Medium": "12pt",
  "Large": "16pt",
  "Extra Large": "24pt",
  "XXL": "32pt"
}
function changeFont() {
  document.getElementById("text-area").style.fontSize = fonts[document.getElementById("fontsize").value];
}