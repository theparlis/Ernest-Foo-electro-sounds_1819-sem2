let shdr;
let buffer;

let shaderLayer;
let mic, fft;
let currentScene;
let changeDistortion;


function preload() {
  shdr = loadShader('basic-vert.txt', 'basic-frag.txt');
}


function setup() {

  createCanvas(960, 540);
  rectMode(CENTER);
  let w = 1920;
  let h = 1080;
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9, 256);
  fft.setInput(mic);
  
  currentScene = drawScene1;
  buffer = createGraphics(w, h, WEBGL)
  buffer.noStroke();

  shaderLayer = createGraphics(w, h, WEBGL);
  shaderLayer.noStroke();

}

function draw() {
  

  let spectrum = fft.analyze();
  background(0);
  currentScene();
  analyseAndShader();

  
  image(mouseIsPressed ? buffer : shaderLayer, 0, 0, width, height);


}


