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

// Santa flying every minute
function flySanta() {
  const santa = document.getElementById("santa");
  santa.style.left = "110vw"; // fly across screen
  setTimeout(() => { 
    santa.style.left = "-200px"; // reset
  }, 5000);
}
setInterval(flySanta, 60000); // every 60 seconds
