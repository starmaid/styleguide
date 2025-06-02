
let numPts = 25;
let randomY = [];

function setup() {
  frameRate(30);
  createCanvas(401, 401);
  
  
}

function draw() {
  background(0);
  randomY = [];
  for(let i =0; i< numPts; i++){
   randomY.push(random(100,300)); 
  }
  //drawScale();
  //drawBorder();
  drawCrosses();
  drawLines();
  //drawEllipses();
}

function drawBorder(){
  stroke(255);
  line(5,5,width-5,5);
  line(5,5,5,height-5);
  line(width-5,5,width-5,height-5);
  line(5,height-5,width-5,height-5);
}

function drawScale(){
  stroke(255);
 // draw lines
  for(let i =0; i<width; i++){
    x = i
    if (i%50 == 0) {
      line(x, 0, x, 20);
    }
    if (i%10 == 0) {
      line(x, 0, x, 10);
    }
  } 
}

function drawCrosses(){
  stroke(255);
 // draw lines
  for(let i =0; i<=width; i++){
    for(let j=0;j<=height; j++){
      x = i
      y = j
      if (i%50 == 0 && j%50 == 0) {
        line(x, y-5, x, y+5);
        line(x-5, y, x+5, y);
      }
    }

  } 
}

function drawEllipses(){
  noStroke();
    // draw ellipses
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    ellipse(x, y, 7);
  }
}

function drawLines(){
  stroke(255,0,0);
 // draw lines
  let px = 0;
  let py = randomY[0];
  for(let i =0; i < randomY.length; i++){
    let x = i * (width / (numPts-1));
    let y = randomY[i];
    line(px, py, x, y);
    
  	//store the last position
    px = x;
    py = y;
  } 
}