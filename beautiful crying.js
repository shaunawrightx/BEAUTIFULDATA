let jsonData;

function preload() {
  loadJSON('MONTHS.json', cryingData);
}

function cryingData(data) {
  jsonData = data;
}
function setup() {
  createCanvas(840, 600);
  background(255);

  console.log(jsonData.data);
}
function draw() {
 

  quad(20,10,620,10,620,390,20,390);
  line(20,200,620,200);
  line(20,220,620,220);
  line(20,30,620,30);
  line(320,10,320,390);
  line(120,10,120,390);
  line(220,10,220,390);
  line(420,10,420,390);
  line(520,10,520,390);
  
  textStyle(ITALIC);
  text('J',70,25);
  text('F',170,25);
  text('M',270,25);
  text('A',370,25);
  text('M',470,25);
  text('J',570,25);
  text('J',70,215);
  text('A',170,215);
  text('S',270,215);
  text('O',370,215);
  text('N',470,215);
  text('D',570,215);
  
  //textSize(20);
  //textStyle(Bold);
  text('M | W',30,410);
  
  
  
  // SARA
  
  drawTeardrop(xm1, y1,(jsonData.data[0].SARA)*10);
  drawTeardrop(xm2, y1,(jsonData.data[1].SARA)*10);
  drawTeardrop(xm3, y1,(jsonData.data[2].SARA)*10);
  drawTeardrop(xm4, y1,(jsonData.data[3].SARA)*10);
  drawTeardrop(xm5, y1,(jsonData.data[4].SARA)*10);
  drawTeardrop(xm6, y1,(jsonData.data[5].SARA)*10);
  
  drawTeardrop(xm1, y2,(jsonData.data[6].SARA)*10);
  drawTeardrop(xm2, y2,(jsonData.data[7].SARA)*10);
  drawTeardrop(xm3, y2,(jsonData.data[8].SARA)*10);
  drawTeardrop(xm4, y2,(jsonData.data[9].SARA)*10);
  drawTeardrop(xm5, y2,(jsonData.data[10].SARA)*10);
  drawTeardrop(xm6, y2,(jsonData.data[11].SARA)*10);

  //SHAUNA

  drawTeardrop(xw1, y1,(jsonData.data[0].SHAUNA)*10);
  drawTeardrop(xw2, y1,(jsonData.data[1].SHAUNA)*10);
  drawTeardrop(xw3, y1,(jsonData.data[2].SHAUNA)*10);
  drawTeardrop(xw4, y1,(jsonData.data[3].SHAUNA)*10);
  drawTeardrop(xw5, y1,(jsonData.data[4].SHAUNA)*10);
  drawTeardrop(xw6, y1,(jsonData.data[5].SHAUNA)*10);

  drawTeardrop(xw1, y2,(jsonData.data[6].SHAUNA)*10);
  drawTeardrop(xw2, y2,(jsonData.data[7].SHAUNA)*10);
  drawTeardrop(xw3, y2,(jsonData.data[8].SHAUNA)*10);
  drawTeardrop(xw4, y2,(jsonData.data[9].SHAUNA)*10);
  drawTeardrop(xw5, y2,(jsonData.data[10].SHAUNA)*10);
  drawTeardrop(xw6, y2,(jsonData.data[11].SHAUNA)*10);

}
const y1 = 125;
const y2 = 305;

const xm1 = 55;
const xw1 = 85;
const xm2 = 155;
const xw2 = 185;
const xm3 = 255;
const xw3 = 285;
const xm4 = 355;
const xw4 = 385;
const xm5 = 455;
const xw5 = 485;
const xm6 = 555;
const xw6 = 585;

function drawTeardrop(x, y, a) {
  
  beginShape();
  noFill();
  // Top half of the teardrop
  vertex(x, y - a );
  bezierVertex(x + a / 2, y - a / 2, x + a / 2, y + a / 2, x, y + a /2);
  
  // Bottom half of the teardrop
  bezierVertex(x - a / 2, y + a / 2, x - a / 2, y - a / 2, x, y - a );
  
  endShape(CLOSE);
}

