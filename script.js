/* SNOW */
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = (12 + Math.random() * 18) + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = (2 + Math.random() * 3) + "s";

  if (Math.random() < 0.4) snowflake.classList.add("sparkle");

  document.getElementById("snow").appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}

setInterval(createSnowflake, 90);

/* SMOKE */
function createSmoke() {
  const puff = document.createElement("div");
  puff.className = "smoke";

  puff.style.left = Math.random() * 8 + "px";
  puff.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.getElementById("smoke").appendChild(puff);
  setTimeout(() => puff.remove(), 6000);
}

setInterval(createSmoke, 700);
