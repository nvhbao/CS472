window.onload = function() {
    var btnMakeBigger = document.getElementById("btnMakeBigger");
    btnMakeBigger.onclick = makeBigger;

    var chkBling = document.getElementById("chkBling");
    chkBling.onchange = changeStyle;
};


let timer = null;

function makeBigger() {
  var txtSample = document.getElementById("txtSample");

  //Will ask professor Xing why this statement can not get its font-size
  //Temporary hard code initial font-size: 12pt
  //var size = parseInt(txtSample.style.fontSize);
  var size = 12;

  size += 4;
  txtSample.style.fontSize = size + "pt";

  if (timer == null) {
    timer = setInterval(function () { 
    // called each time the timer goes off
    size += 4;
    txtSample.style.fontSize = size + "pt";
    }, 1000);
  } else { 
    clearInterval(timer);
    timer = null;
  }
}

function changeStyle() {
  var txtSample = document.getElementById("txtSample");
  var chkBling = document.getElementById("chkBling");

  if (chkBling.checked) {
    txtSample.style.fontWeight = "bold";
    txtSample.style.textDecoration = "underline";
    txtSample.style.color = "green";
  } else {
    txtSample.style.fontWeight = "normal";
    txtSample.style.textDecoration = "none";
    txtSample.style.color = "black";
  }

}