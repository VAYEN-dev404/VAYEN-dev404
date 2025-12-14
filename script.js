function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = (10 + Math.random() * 18) + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = (2 + Math.random() * 3) + "s";

  // 35% chance to sparkle
  if (Math.random() < 0.35) {
    snowflake.classList.add("sparkle");
  }

  document.getElementById("snow").appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 8000);
}

setInterval(createSnowflake, 90);

