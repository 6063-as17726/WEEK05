let xPos = []; 
let yPos = [];
let xVel = [];
let cDiam = [];

let numCircles = 25; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  for( let i = 0; i<numCircles; i++){
  xPos.push(0);
  yPos.push(random(30, height-30)); 
  xVel.push(random(2,5)); 
  cDiam.push(random(20,70)); 
  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);
  for(let i =0; i<numCircles; i+=1) {
  // draw circle
  ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);
  // update pos
  xPos[i] = xPos[i] + xVel[i];
  // if reset is needed: pick random diameter and reset x
  if (xPos[i] > width + cDiam[i]) {
    cDiam[i] = random(20, 75);
    xPos[i] = 0 - cDiam[i];
  }
  }
}
