 function openmenu()
 {
	 document.getElementById("side-menu").style.display="block";
	 document.getElementById("m-bar-btn-open").style.display="none";
	 document.getElementById("m-bar-btn-close").style.display="block";
	 document.body.style.overflowY = "hidden";
 }
 
  function closemenu()
 {
	 document.getElementById("side-menu").style.display="none";
	 document.getElementById("m-bar-btn-open").style.display="block";
	 document.getElementById("m-bar-btn-close").style.display="none";
 }