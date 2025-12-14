function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = (12 + Math.random() * 18) + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = (4 + Math.random() * 5) + "s";

  // 40% chance to sparkle
  if (Math.random() < 0.4) {
    snowflake.classList.add("sparkle");
  }

  document.getElementById("snow").appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 8000);
}

// Snowflake spawn interval
setInterval(createSnowflake, 90);

function createSmoke() {
  const puff = document.createElement("div");
  puff.className = "smoke";

  puff.style.left = Math.random() * 10 + "px";
  puff.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.getElementById("smoke").appendChild(puff);

  setTimeout(() => puff.remove(), 5000);
}

setInterval(createSmoke, 800);
