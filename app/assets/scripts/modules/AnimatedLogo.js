var animatedLogo = document.getElementById("introVideo");
animatedLogo.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 4000);
});