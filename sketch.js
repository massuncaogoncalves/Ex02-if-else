function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(80);
 noStroke();

}

function draw() {
  background(255, 255, 232, 25);

  if (mouseX < width / 2) {
    if(mouseY < height / 2) {
      fill(255, 220, 40);
    } else {
      fill(130, 200, 175);
    }
    
  } else {
   if(mouseY < height /2) {
    fill(224,122,95);
  } else {
    fill(61,90,128);
  }
 }
 
 
let tamanho = 40  
if (mouseIsPressed) {
  tamanho = 80;
}

circle(mouseX, mouseY, tamanho);

fill(246,239,226);
circle(mouseX, mouseY, tamanho / 3);

}
