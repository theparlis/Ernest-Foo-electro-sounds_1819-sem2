let shdr;
let buffer;
let shaderLayer;

let currentScene;

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
  
  currentScene = drawScene1;
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
  
  currentScene();
  
  analyseAndShader();
  
  
  // draw buffer with shader applied
  image(mouseIsPressed ? buffer : shaderLayer, 0, 0, width, height);


}


