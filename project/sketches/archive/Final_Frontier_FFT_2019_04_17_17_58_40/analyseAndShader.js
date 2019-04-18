function analyseAndShader() {
  
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

  let v0 = map(max(0.4, min(centroidplot, 0.6)), 0.4, 0.6, 0, 1);
  let v1 = map(max(0.6, min(centroidplot, 0.8)), 0.4, 0.6, 0, 9);
  // shader part
  // apply shader to buffer
  shaderLayer.shader(shdr);
  let offsetX = map(v1 * 100, 0, width, 0, 200);
  let offsetY = map(v0 * 100, 0, height, 0.05, 0.1);
  shdr.setUniform('offset', [offsetX, offsetY]);
  shdr.setUniform('time', frameCount * 0.001);
  shdr.setUniform('tex0', buffer);
  shaderLayer.rect(0, 0, width, height);

}
