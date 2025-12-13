function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  // Random horizontal position
  snowflake.style.left = Math.random() * 100 + "vw";

  // Random speed: 1.5s to 4.5s
  snowflake.style.animationDuration = (1.5 + Math.random() * 3) + "s";

  // Random size: 10px to 25px
  snowflake.style.fontSize = (10 + Math.random() * 15) + "px";

  // Random opacity
  snowflake.style.opacity = Math.random();

  document.getElementById("snow").appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Create a snowflake every 100ms
setInterval(createSnowflake, 100);
