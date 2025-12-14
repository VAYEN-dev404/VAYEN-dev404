function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  // Random position
  snowflake.style.left = Math.random() * 100 + "vw";

  // Faster fall
  snowflake.style.animationDuration = (2 + Math.random() * 3) + "s";

  // Random size
  snowflake.style.fontSize = (10 + Math.random() * 18) + "px";

  // Random opacity
  snowflake.style.opacity = Math.random();

  // ✨ 30% chance to sparkle
  if (Math.random() < 0.3) {
    snowflake.classList.add("sparkle");
  }

  document.getElementById("snow").appendChild(snowflake);

  // Remove after fall
  setTimeout(() => {
    snowflake.remove();
  }, 7000);
}

// Create snow constantly
setInterval(createSnowflake, 90);
