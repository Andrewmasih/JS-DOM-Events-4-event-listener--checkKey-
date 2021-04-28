
document.addEventListener ("keyup", function (event) {
  if (event.key == "l"|| event.key == "L") {
    lightTheme();
  
  }

  if (event.key == "d" || event.key == "D") {
    darkTheme();
  }

});



function lightTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}

function darkTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}