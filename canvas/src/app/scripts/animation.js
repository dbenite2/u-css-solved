var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = function() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            context.stroke();
        }
        this.update = function() {
            if (this.x + this.radius > 750 || this.x - this.radius < 0) {
                this.dx -= this.dx;
            }
            if (this.y + this.radius > 500 || this.y - this.radius < 0) {
                this.dy -= this.dy;
            }
            this.dx += this.dx;
            this.dy += this.dy;
            this.draw();
        }
    }
}

var circles = [];

var radius = 28;

for (var i = 0; i < 3; i++) {
    var x = Math.random() * (750 - radius * 2);
    var y = Math.random() * (500 - radius * 2);
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circles.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    // requestNextAnimactionFrame();
    requestAnimationFrame(animate);
    context.clearRect(0, 0, 750, 500);
    for (var r = 0; r < 3; r++) {
        circles[r].update();
    }
}

var button = document.getElementById("animateButton");
button.addEventListener("click", function() {
    if (button.value = "Animate") {
        button.value = "Pause";
        button.style.backgroundColor = "rgba(231, 76, 60, 1)";
        animate();
    } else if (button.value = "Pause") {
        button.value = "Animate";
        button.style.backgroundColor = "rgba(39, 174, 96, 1);";
    }

});