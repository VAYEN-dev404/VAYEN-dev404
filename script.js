/* SNOW */
setInterval(() => {
  const s = document.createElement("div");
  s.className = "snowflake sparkle";
  s.textContent = "❄";
  s.style.left = Math.random() * 100 + "vw";
  s.style.fontSize = 12 + Math.random() * 18 + "px";
  s.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.getElementById("snow").appendChild(s);
  setTimeout(() => s.remove(), 6000);
}, 90);

/* SMOKE */
setInterval(() => {
  const puff = document.createElement("div");
  puff.className = "smoke";
  document.getElementById("smoke").appendChild(puff);
  setTimeout(() => puff.remove(), 5000);
}, 700);
