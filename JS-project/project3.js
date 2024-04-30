

document.addEventListener("DOMContentLoaded", function () {
  const volumeDisplay = document.getElementById("volume-display");
  const container = document.getElementById("container");



  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




  function makeCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
      circle.style.width = getRandomNumber(20, 100) + "px";
    circle.style.height = circle.style.width;
    circle.style.backgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    circle.style.left = getRandomNumber(0, window.innerWidth - parseInt(circle.style.width)) + "px";
    circle.style.top = getRandomNumber(0, window.innerHeight - parseInt(circle.style.height)) + "px";
    circle.setAttribute("data-volume", getRandomNumber(0, 100));




    circle.addEventListener("click", function () {
      const volume = this.getAttribute("data-volume");
      volumeDisplay.textContent = "Volume: " + volume;
    });

    container.appendChild(circle);
  }


  for (let i = 0; i < 30; i++) {
    makeCircle();
  }

  function moveCircles() {
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
      const x = getRandomNumber(0, window.innerWidth - parseInt(circle.style.width));
      const y = getRandomNumber(0, window.innerHeight - parseInt(circle.style.height));
      circle.style.left = x + "px";
      circle.style.top = y + "px";
    });
  }

  setInterval(moveCircles, 6000);
});
