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
  	for(i in buttons){
		if(buttons[i].children[0].innerHTML == "&lt;&lt;"){
			window.location = buttons[i].children[0].href;
			break;
		}
	}
  } 
  if(keyCode==77) {
  	var v=document.getElementsByTagName('video')[0]; v.muted=!v.muted;
  } 
  if(keyCode==39 || keyCode==32) {
  	for(i in buttons){
		if(buttons[i].children[0].innerHTML == "&gt;&gt;"){
			window.location = buttons[i].children[0].href;
			break;
		}
	}
  }
}

