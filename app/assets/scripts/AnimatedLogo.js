var animatedLogo = document.getElementById("introVideo");
introVideo.addEventListener("canplay", () => {
  setTimeout(() => {
    video.play();
  }, 100);
});