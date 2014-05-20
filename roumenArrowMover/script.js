document.addEventListener("keydown", keyDownListener, false);

function keyDownListener(e) {
  var keyCode = e.keyCode;
  var btnClass;
  if(document.URL.indexOf('roumenovomaso.cz') != -1){
	btnClass = "masoButton";
  }else{
	btnClass = "roumingButton";
  }
  var buttons = document.getElementsByClassName(btnClass);

  if(keyCode==37) {
	window.location = buttons[0].children[0].href;
  } 
  if(keyCode==39 || keyCode==32) {
	window.location = buttons[2].children[0].href;
  }
}

