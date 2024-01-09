const canvas = document.getElementById("flyingPointsCanvas");
const ctx = canvas.getContext("2d");

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

adjustCanvasSize();

const points = [];

function Point(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = function () {
    this.draw();
    this.x += 1; // Adjust the speed of points along the x-axis
    this.y += Math.random() * 2 - 1; // Randomize the movement along the y-axis

    // Reset the points when they go beyond the canvas
    if (this.x > canvas.width + this.radius) {
      this.x = -this.radius;
    }
    if (this.y > canvas.height + this.radius) {
      this.y = Math.random() * canvas.height;
    }
    if (this.y < -this.radius) {
      this.y = Math.random() * canvas.height;
    }
  };
}

function createPoints() {
  const numberOfPoints = Math.floor((canvas.width * canvas.height) / 10000); // Adjust based on canvas size
  for (let i = 0; i < numberOfPoints; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3;
    const color = "rgba(255, 255, 255, 0.5)";

    points.push(new Point(x, y, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const point of points) {
    point.update();
  }
}

createPoints();
animate();

// Adjust canvas size when the window is resized
window.addEventListener("resize", () => {
  adjustCanvasSize();
  points.length = 0; // Clear existing points
  createPoints(); // Recreate points when the canvas size changes
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const changingText = document.getElementById("changingText");
  const newText = "THE BEST DEVELOPER";
  const pinkColor = "#ff014f";

  function typeText(index) {
    changingText.textContent = newText.slice(0, index);
    changingText.style.color = pinkColor; // Change color to pink during typing
    changingText.style.fontSize = "4rem"; // Set text size to 4rem
    if (index < newText.length) {
      setTimeout(() => {
        typeText(index + 1);
      }, 100); // Adjust the speed of typing
    } else {
      setTimeout(() => {
        eraseText(newText.length);
      }, 2000); // Wait for 2 seconds before erasing
    }
  }

  function eraseText(index) {
    changingText.textContent = newText.slice(0, index);
    changingText.style.color = pinkColor; // Change color to pink during erasing
    changingText.style.fontSize = "4rem"; // Set text size to 4rem
    if (index > 0) {
      setTimeout(() => {
        eraseText(index - 1);
      }, 50); // Adjust the speed of erasing
    } else {
      setTimeout(() => {
        typeText(0);
      }, 2000); // Wait for 2 seconds before typing again
    }
  }

  typeText(0); // Start typing initially
});
