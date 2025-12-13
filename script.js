function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = (4 + Math.random() * 5) + "s"; // faster
  snowflake.style.fontSize = (10 + Math.random() * 20) + "px"; // random size
  snowflake.style.opacity = Math.random();

  document.getElementById("snow").appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 6000); // long enough to fall
}

// Spawn snowflake every 100ms
setInterval(createSnowflake, 100);
