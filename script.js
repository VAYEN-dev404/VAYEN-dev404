function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  // Random horizontal position
  snowflake.style.left = Math.random() * 100 + "vw";

  // Random fall duration: 2–5 seconds
  snowflake.style.animationDuration = (2 + Math.random() * 3) + "s";

  // Random size
  snowflake.style.fontSize = (10 + Math.random() * 20) + "px";

  // Random opacity
  snowflake.style.opacity = Math.random();

  // Add to DOM
  document.getElementById("snow").appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, 6000); // 6 seconds (longer than animation to avoid disappearing early)
}

// Spawn a snowflake every 100ms
setInterval(createSnowflake, 100);
