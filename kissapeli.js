let taustakuva;
let kissakuva;
let kissa;
let taustan_korkeus = 700;
let taustan_leveys = 1400;
let lautan_leveys = 120;
let lautan_korkeus = 20;
let lautan_Y = taustan_korkeus - 50;

function preload(){
  taustakuva = loadImage("https://igno.cc/opetus/kuvat/tausta.png");
  kissakuva = loadImage("https://igno.cc/opetus/kuvat/cat.png");
}

function setup(){
  kissa = new Kissa();
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);
  angleMode(DEGREES);
}
function draw() {
  image(taustakuva,0,0,taustan_leveys,taustan_korkeus);
  lautta();
  kissa.liike();
}



function lautta() {
  fill(100,60,60)

  if (mouseX > taustan_leveys) {
  rect(taustan_leveys -50, lautan_Y, lautan_leveys, lautan_korkeus,30,30,10,10);
  } else {
  rect(mouseX, lautan_Y, lautan_leveys, lautan_korkeus,30,30,10,10);
  }
}

class Kissa {
  constructor() { //luodaaan monta muuttujaa kissalle
    this.X = 50;
    this.Y = 350
    this.korkeus = 50;
    this.leveys = 50;
    this.xNopeus = 2;
    this.yNopeus = -4;
    this.kulma = 0;
  }
  liike() {
    this.yNopeus += 0.05;
    this.X += this.xNopeus; // liike vasen-oikea
    this.Y += this.yNopeus; // painovoima
    //f12 avaa debug konsolin

    if (this.Y + this.korkeus > lautan_Y){
      if (this.X > mouseX && this.X < mouseX + lautan_leveys) {
        this.yNopeus = -abs(this.yNopeus)
      }
    }
    this.kulma += 1;
    push();
    translate(this.X, this.Y);
    rotate(this.kulma);
    imageMode(CENTER);
    image(kissakuva,0,0, this.leveys, this.korkeus);
    pop();
  }
}
