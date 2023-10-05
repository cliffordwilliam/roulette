let wheel = document.querySelector(".wheel");
let spinButton = document.querySelector(".spin-button");

let cumulatedRotation = 0;

spinButton.addEventListener("click", () => {
  let randMultiplier = Math.random() * 2 + 1;
  let randAngle = Math.floor(randMultiplier * 360);
  let spinDuration = randAngle / 360;
  cumulatedRotation += randAngle;

  // no other way, cannot pass data to css class
  wheel.style.transform = `rotate(${cumulatedRotation}deg)`;
  wheel.style.transition = `transform ${spinDuration}s ease-out`;
});
