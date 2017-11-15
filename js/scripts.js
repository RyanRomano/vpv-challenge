var offset;

var navbar = document.getElementById("navigation");
var hero = document.getElementById("hero")

function stick() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function onElementHeightChange(elm, callback){
    var lastHeight = elm.clientHeight, newHeight;
    (function run(){
        newHeight = elm.clientHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        if( elm.onElementHeightChangeTimer )
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}

$(document).ready(function(){
    offset = hero.clientHeight;
    
    $("#arrow").on('click', function(event) {
        $('html, body').animate({
            scrollTop: $("#navigation").offset().top
        }, 500);       
    });

    onElementHeightChange(document.body, function(){
        offset = hero.clientHeight;        
    });
});