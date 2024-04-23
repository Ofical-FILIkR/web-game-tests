
var canvas = document.getElementById("canvas_1")

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
}

var rectangle = new Path2D();

rectangle.rect(250, 250, 100, 100);
ctx.fill(rectangle);



function draw() {
    console.log("передвинут")
    rectangle.moveTo(200, 200)
    ctx.fill(rectangle);
}


setTimeout(() => draw(), 3000);

