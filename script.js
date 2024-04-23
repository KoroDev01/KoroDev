const menu = document.getElementById('menu-icon');
const header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  header.classList.toggle('open');
}






var texts = ["THE BEST DEVELOPER", "A PROFESSIONAL CODER"];
var counter = 0;
var index = 0;
var textContainer = document.getElementById("text-container");

function typeText() {
 var currentText = texts[counter];
 textContainer.textContent = currentText.substring(0, index);
 index++;

 if (index > currentText.length) {
 clearInterval(intervalId); // Stop the current animation
 setTimeout(function() { // Wait for a certain period before starting to type the next text
  counter = (counter + 1) % texts.length; // Move to the next text in the array
  index = 0; // Reset the index for the new text
  intervalId = setInterval(typeText, 100); // Start typing the new text
 }, 300); // Wait 300ms before starting to type the next text
 }
}

var intervalId = setInterval(typeText, 100); // Start typing the first text







class FlyingPointsCanvas {
  constructor(parentSelector, speed, numPoints, pointSize, opacity) {
    this.canvas = document.createElement('canvas');
    this.parent = document.querySelector(parentSelector);
    this.parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.flyingPoints = [];

    this.speed = speed || 1;
    this.numPoints = numPoints || 50;
    this.pointSize = pointSize || 3;
    this.opacity = opacity || 0.5;

    this.initializeCanvas();
    this.createFlyingPoints();
    this.animate();
  }

  initializeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.parent.offsetHeight; // Set canvas height to parent div height

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = this.parent.offsetHeight;
      this.createFlyingPoints();
    });
  }

  createFlyingPoints() {
    this.flyingPoints = [];
    for (let i = 0; i < this.numPoints; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * this.pointSize + 1;
      const speed = (Math.random() - 0.5) * 2 * this.speed;
      this.flyingPoints.push({ x, y, size, speed });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const point of this.flyingPoints) {
      point.x += point.speed;
      if (point.x > this.canvas.width + point.size) {
        point.x = 0 - point.size;
        point.y = Math.random() * this.canvas.height;
      }

      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Instanciate the FlyingPointsCanvas class with custom parameters
const flyingPointsCanvas = new FlyingPointsCanvas('.home', 0.5, 75, 5, 0.3);


