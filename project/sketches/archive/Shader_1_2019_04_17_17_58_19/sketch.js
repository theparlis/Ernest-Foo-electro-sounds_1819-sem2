let shdr;
let buffer;
let shaderLayer;

function preload() {
  // first, lets load our shaders vertex and fragment
  // you can keep the vertex shader as is
  // make changes to the fragment shader
  shdr = loadShader('basic-vert.txt', 'basic-frag.txt');
}


function setup() {

  createCanvas(960, 540);
  rectMode(CENTER);
  let w = 1920;
  let h = 1080;

  // create a graphics element to draw
  buffer = createGraphics(w, h, WEBGL)
  buffer.noStroke();

  // create a graphics element to
  // render the buffer and shader together
  shaderLayer = createGraphics(w, h, WEBGL);
  shaderLayer.noStroke();

  sound = new p5.AudioIn();
  sound.start();
  fft = new p5.FFT();
  sound.connect(fft);

}

function draw() {

  background(0);

  // buffer part
  // use the draw buffer to draw shapes

  buffer.background(0, 40, 70);
  buffer.rectMode(CENTER);
  buffer.push();
  buffer.translate(-buffer.width / 2, -buffer.height / 2);
  buffer.translate(buffer.width / 2, buffer.height / 2);
  buffer.rotateY(frameCount * 0.000001);
  buffer.rotateX(frameCount * 0.0001);
  buffer.translate(0, 0, -200);
  buffer.fill(80, 230, 150);
  buffer.ellipse(0, 0, buffer.width, 30);
  buffer.rotateY(frameCount * 0.01);
  buffer.push();
  buffer.translate(400, sin(frameCount * 0.02) * buffer.height/2 ,sin(frameCount * 0.02) * buffer.width/2 ,1);
  buffer.fill(255, 255, 255); 
  buffer.ellipse(0, 0, 70, 70);
  buffer.pop();
  buffer.push();
  buffer.translate(-200, sin(frameCount * 0.008) * buffer.height/2,sin(frameCount * 0.008) * buffer.width/2 ,1);
  buffer.fill(204,154,244); 
  buffer.ellipse(0, 0, 80, 80);
  buffer.pop();
  buffer.push();
  buffer.translate(-400, sin(frameCount * 0.08) * buffer.height/2,sin(frameCount * 0.008) * buffer.width/2 ,1);
  buffer.fill(0, 0, 0); 
  buffer.ellipse(0, 0, 70, 70);
  buffer.pop();
  buffer.push();
  buffer.translate(200, sin(frameCount * 0.01) * buffer.height/2,sin(frameCount * 0.01) * buffer.width/2 , 1);
  buffer.fill(154, 194, 244); 
  buffer.ellipse(0, 0, 90, 90);
  buffer.pop();
  buffer.push();
  buffer.translate(-300, sin(frameCount * 0.05) * buffer.height/2, sin(frameCount * 0.05) * buffer.width/2, 1);
  buffer.fill(154, 244, 204); 
  buffer.ellipse(0, 0, 120, 120);
  buffer.pop();
  buffer.push();
  buffer.translate(380, sin(frameCount * 0.005) * buffer.height/2,sin(frameCount * 0.005) * buffer.width/2 ,1);
  buffer.fill(255, 0, 255); 
  buffer.ellipse(0, 0, 120, 120);
  buffer.pop();
  buffer.push();
  buffer.translate(-250, sin(frameCount * 0.04) * buffer.height/2,sin(frameCount * 0.04) * buffer.width/2 ,1);
  buffer.fill(244, 154, 194); 
  buffer.ellipse(0, 0, 120, 120);
  buffer.pop();
  buffer.translate(-100, 0, -100);
  buffer.fill(255, 10, 0);
  buffer.rect(100, 0, 20, 100);
  buffer.pop();
  buffer.push();
  buffer.translate (-250, -60 , -50); 
  buffer.fill(10, 255, 200);
  buffer.ellipse(255,50,350);
  buffer.pop();
  buffer.push();

  
var spectrum = fft.analyze();

//draw the spectrum
for (var i = 0; i< spectrum.length; i++){
  var x = map(log(i), 0, log(spectrum.length), 0, width);
  var h = map(spectrum[i], 200, 255, 100, height);
  var rectangle_width = (log(i+1)-log(i))*(width/log(spectrum.length));
  rect(x, height, rectangle_width, -h )
}
  var nyquist = 22050;

  // get the centroid
  spectralCentroid = fft.getCentroid();

  // the mean_freq_index calculation is for the display.
  var mean_freq_index = spectralCentroid / (nyquist / spectrum.length);

  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, 1);

  let v0 = map(max(0.4, min(centroidplot, 0.8)), 0.4, 0.6, 0,1);
  let v1 = map(max(0.6, min(centroidplot, 0.8)), 0.7, 0.9, 0,9);
  // shader part
  // apply shader to buffer
  shaderLayer.shader(shdr);
  let offsetX = map(v1 * 1000, 0, width, 0, 200);
  let offsetY = map(v0 * 1000, 0, height, 0.01, 0.01);
  shdr.setUniform('offset', [offsetX, offsetY]);
  shdr.setUniform('time', frameCount * 0.0001);
  shdr.setUniform('tex0', buffer);
  shaderLayer.rect(0, 0, width, height);

  // draw buffer with shader applied
  image(mouseIsPressed ? buffer : shaderLayer, 0, 0, width, height);

  // overlay
  noStroke()
  fill(0)
  rect(width / 4, height / 4, 40, centroidplot/2)
  text(centroidplot+"\n"+round(spectralCentroid)+"Hz", 20, height/2)
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
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