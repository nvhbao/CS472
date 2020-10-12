$(document).ready(function () {
    $("#start").click(function() {
      startClick();
    });
  
    $("#end").mouseover(function () {
      overEnd();
    });
    $("#maze").mouseleave(function() {
      noCheat();
    });   
    $(".boundary").mouseover(function(){
        overBoundary();
      });
});

function overBoundary() {
    $(".boundary").addClass("youlose");
    $("#status").text("You Lose!");
    $("#status").text();
}

function startClick() {
    console.log("Start");
    $(".boundary").removeClass("youlose");
    $("#status").text("Game is started");
    $("#status").text();
}

function overEnd() {
    console.log("End");
    $("#status").text("You win");
    $("#status").text();
}

function noCheat() {
    console.log("NoCheat");
    $(".boundary").addClass("youlose");
    $("#status").text("Nice try...");
    $("#status").text();
}

