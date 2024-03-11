let counter = 0;
let countInterval;

function setup() {
  createCanvas(400, 400);
  background(220);
  countInterval = setInterval(dots, 1000);
}

function mousePressed(){ 
   setTimeout(function() {
      icecream(random(0,200), random(0,300), 30, color(0, 255, 255));
   }, 2000);
}

function icecream(x, y, size, colour){
  noStroke()
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);
  fill(colour);
  ellipseMode(CORNER);
  ellipse(x, y - 35, 40, 41);
}

function dots(){
  stroke('purple');
  strokeWeight(10);
  point(random(0, 100), random(0,200));
  point(random(0,200), random(0,200));
  point(random(0, 150), random(0,100));
  point(random(0, 150), random(0, 300));
  counter++;
  if (counter >= 10){
	clearInterval(countInterval);
    counter = 0;
    background(220);
    countInterval = setInterval(dots, 1000);
    }
}

