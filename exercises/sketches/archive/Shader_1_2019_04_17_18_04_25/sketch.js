let shdr;
let buffer;
let shaderLayer;

function preload() {
  //load shaders vertex and fragment
  shdr = loadShader('shader-vert.txt','shader-frag.txt');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  rectMode(CENTER);
  
}

function draw() {
  background(220);
  
  shader(shdr);
  let value = frameCount%mouseX * 0.01;

  shdr.setUniform('value', value);
  rect(0, 0, width, height);
}