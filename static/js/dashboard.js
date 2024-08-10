function accordion(id) {
  var x = document.getElementById(id);
  var y = document.getElementById("icon_" + id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    y.className = y.className.replace(" fa-plus", " fa-minus");
  } else {
    x.className = x.className.replace(" w3-show", "");
    y.className = y.className.replace(" fa-minus", " fa-plus");
  }
}

function accordion_sidebar(id) {
  var x = document.getElementById(id);
  var y = document.getElementById("icon_" + id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show w3-panel";
    y.className = y.className.replace(" fa-bars", " fa-times");
    document.getElementById(id).style.width = "40%";
    document.getElementById(id).style.display = "block";
    document.getElementById("lessonContent").style.opacity = "0%";
    document.getElementById("backgoundMenuImage").style.display = "block";
  } else {
    x.className = x.className.replace(" w3-show w3-panel", "");
    y.className = y.className.replace(" fa-times", " fa-bars");
    document.getElementById(id).style.display = "none";
    document.getElementById("lessonContent").style.opacity = "100%";
    document.getElementById("backgoundMenuImage").style.display = "none";
  }
}