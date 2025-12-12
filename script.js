// Snowfall
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = 4 + Math.random() * 6 + "s";
  snowflake.style.opacity = Math.random();

  document.getElementById("snow").appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}
setInterval(createSnowflake, 150);

// Santa + Reindeer flying
function flySanta() {
  const santa = document.getElementById("santa");

  // Move across screen
  santa.style.left = "110vw";

  // Reset after flying
  setTimeout(() => { 
    santa.style.left = "-300px";
  }, 8000);
}

// Start flying every 60 seconds
setInterval(flySanta, 60000);

// Fly once on page load
flySanta();
