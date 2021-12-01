var xPos;
var yPos;
var scaleW;
var scaleH;

var r = 20;
var g = 100;
var b = 200;
var a = 0.0;
var s = 2.0;
var t = 0;
var faces = [];
var fruitMax = 3;

let fruits = ["🍒", "🍑", "🍓", "🍋"];
var index = 0;
var rando;
var rand02;
var check = 0;

var f = 2;
var rand02check = rand02+1;

function setup() {
  createCanvas(560, 220);
  angleMode(DEGREES);

  xPos = 20;
  yPos = 35;
  scaleW = random(40, 70);
  scaleH = random(80, 110);

  var index = 0;
  for (var i = 0; i < 16; i++) {
    faces[index] = new Face(xPos, yPos);
    xPos += 40;
    if (xPos > width - 200) {
      xPos = 20;
      yPos += 105;
    }
    index++;
  }
}

function draw() {
  //background(150);
  textSize(70);
  background(220);

  for (var i = 0; i < rando; i++) {
    faces[i].head();
    faces[i].speak();
  }
rand02 = random(0, fruits.length);
  //while(check<rando){
  for (var j = 2; j < 3; j++) {
    xPos = 10;
    while (xPos < rando * 100 - 30) {
      //while(f<5){ // comment out here in not working
      text(fruits[j], xPos, 200);
      xPos += 70;
      //f++;// comment out here in not working
      //j++;// comment out here in not working
      console.log("working");
      //}// comment out here in not working
    }
    //xPos=0;
  }
  //while(check<rando){
  //text(fruits[j],xPos,200);
  //xPos+=50;
  //check++;
  //}
  /*
    if(rando==1){
      text(fruits[j],15,200)
    } else if(rando==2){
      text(fruits[j],45,200)
    } else if(rando==3){
      text(fruits[j],75,200)
    } else if(rando==4){
      text(fruits[j],105,200)
    } else if (rando==5){
      text(fruits[j],135,200)
    } else if (rando==6){
      text(fruits[j],175,200)
    } else if (rando==7){
      text(fruits[j],205,200)
    } else
        check=check;
  }*/
  //check++;
  //}

  if (frameCount % 60 == 0) {
    r = floor(random(20, 255));
    g = floor(random(20, 255));
    b = floor(random(20, 255));
    scaleW = random(40, 90);
    scaleH = random(80, 130);
  }
  // rando = random(1, 7);
}

class Face {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = random(scaleW * 0.33);
    this.t = random(scaleW * 0.33);
    this.c = color(255, 150, 20);
  }

  speak() {
    //mouth
    push();
    translate(this.x, this.y, this.s);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(this.x, this.y + 0.2 * scaleH, this.s, this.t);
    pop();
  }

  head() {
    push();
    translate(this.x, this.y, this.s);
    //face shape
    //scale(s);
    fill(130);
    ellipse(this.x, this.y, scaleW, scaleH);
    //eyes

    fill(r, g, b);
    ellipse(
      this.x - 0.13 * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.23,
      scaleH * 0.09
    );

    fill(0, 0, 0);
    ellipse(
      this.x - random(0.1, 0.2) * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.05,
      scaleH * 0.06
    );

    fill(r + 55, g + 55, b + 55);
    ellipse(
      this.x + 0.13 * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.23,
      scaleH * 0.09
    );

    fill(0, 0, 0);
    ellipse(
      this.x + random(0.1, 0.2) * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.05,
      scaleH * 0.06
    );
    pop();
  }
  setMouth(s, t) {
    this.s = s;
    this.t = t;
  }
}

function mousePressed() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  scaleW = random(40, 90);
  scaleH = random(80, 130);
  s = random(10, 90);
  t = random(10, 90);
  index++;
  rando = random(1, 7);
  rand02 = random(0, fruits.length);
  loop();
}
