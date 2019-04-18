let shdr;
let shaderLayer;
let mic;
let vol = 0;
let w = 1920/2;
let h= 1080/2;

function preload() {
  shdr = loadShader('ray-march-vert.txt', 'ray-march-frag.txt');
  mic = new p5.AudioIn();
  mic.start();
}


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);

  shaderLayer = createGraphics(w, h, WEBGL);
  shaderLayer.noStroke();
}

function draw() {
  background(0);

  shaderLayer.shader(shdr);

  vol += (mic.getLevel() - vol) * 0.1;

  shdr.setUniform('time', frameCount * 0.01);
  shdr.setUniform('vol', vol * 1000.0);
  shdr.setUniform('resolution', [w,h]);

  shaderLayer.rect(0,0,width,height);

  // draw image with shader applied
  if(pixelDensity() === 2) {
  	image(shaderLayer, 0, -height, width*2, height*2);
  } else {
  	image(shaderLayer, 0, 0, width, height);
  }

}


function keyPressed() {
	if(key === 'f' || key === 'F') {
  	enterFullscreen();
  }
}

/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
}
