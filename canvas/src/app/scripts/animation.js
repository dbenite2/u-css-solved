var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var circles = [];
var colors = ["green", "purple", "blue"];

var radius = 25;
class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;


        this.draw = function() {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            context.lineWidth = 1;
            context.strokeStyle = color;
            var grd = context.createRadialGradient(this.x, this.y, 5, this.x, this.y, this.radius);
            grd.addColorStop(0, color);
            grd.addColorStop(1, "white");
            context.fillStyle = grd;
            context.fill();
            context.stroke();
        }

        this.update = function() {
            if (this.x + this.radius > 750 || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > 500 || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();

        }

        this.inPlace = function() {
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }

    }
}



for (var i = 0; i < 3; i++) {
    var x = Math.random() * (750 - radius * 2);
    var y = Math.random() * (500 - radius * 2);
    var dx = (Math.random() - 1.5) * 2;
    var dy = (Math.random() - 1.5) * 2;
    circles.push(new Circle(x, y, dx, dy, radius, colors[i]));
}

var flg = true;

function animate() {
    if (flg) {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, 750, 500);
        for (var r = 0; r < 3; r++) {
            circles[r].update();
        }
    }
}





var button = document.getElementById("animateButton");
button.addEventListener("click", changeValue);

function changeValue() {
    if (button.value === "Animate") {
        button.value = "Pause";
        button.style.backgroundColor = "rgba(231, 76, 60, 1)";
        flg = true;
        animate();


    } else {
        button.value = "Animate";
        button.style.backgroundColor = "rgba(39, 174, 96, 1)";
        flg = false;

    }
}