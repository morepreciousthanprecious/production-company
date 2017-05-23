const animatedLogo = document.getElementById("introVideo");
animatedLogo.addEventListener("canplay", () => {
  setTimeout(() => {
    video.play();
  }, 4000);
});