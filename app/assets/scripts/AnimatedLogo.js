window.onload=function(){

	var animatedLogo = document.getElementById("introVideo");

	animatedLogo.addEventListener("canplay", () => {
	  setTimeout(() => {
	    video.play();
	  }, 100);
	});

}