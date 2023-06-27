const canvas = document.createElement("canvas");
let body = document.body;
body.style.background = "skyblue";
body.style.margin = 0 + "px";
body.style.overflow = "hidden";
canvas.style.display = "block";
body.append(canvas);

// const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class RainDrop {
  constructor(x, y, length, speed) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.speed = speed;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
const rainDrops = [];
for (let i = 0; i < 100; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const length = Math.random() * 20 + 10;
  const speed = Math.random() * 6 + 2;
  rainDrops.push(new RainDrop(x, y, length, speed));
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const drop of rainDrops) {
    drop.update();
    drop.draw();
  }
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


