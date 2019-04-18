

function analyseAndShader() {
  
let spectrum = fft.analyze();
let v0 = map(spectrum[50]/8, 0, 1.0, 0, 1.0);
let v1 = map(spectrum[100]/4, 0, 0.9, 0, 9);
  
  shaderLayer.shader(shdr);
  let offsetX = map(spectrum[0]*0.7, 0, width*1.5, 0, 4000);
  let offsetY = map(spectrum[0]*0.9, 0, height*1.5, 0, 1.2);
  
  shdr.setUniform('offset', [offsetX, offsetY]);
  shdr.setUniform('time', frameCount * 0.5);
  shdr.setUniform('tex0', buffer);
  shaderLayer.rect(0, 0, width, height);

}
