function drawScene1() {
  
  let spectrum = fft.analyze();
  let trans = map(spectrum[50], 0, 80, 0, 180)
  let trans1 = map(spectrum[100], 0, 80, 0, 180)

  
  buffer.background(131,151,179);
  buffer.rectMode(CENTER);
  
  
  buffer.push();
  for(let i=0;i<100;i++) {
    buffer.fill(255);
    buffer.rect(random(-width,width), random(-height,height),8,8);
  }
  buffer.pop()
  
  
  buffer.push();
  for (let i=0; i<spectrum[50]; i++) {
  buffer.fill(242, 213, 169, trans);
  buffer.stroke(255);
  buffer.push();
  buffer.translate(random(-width,width), random(-height,height),0);
  //buffer.rotateY(PI/2*sin(frameCount*0.005));
  //buffer.rotateX(PI/2*sin(frameCount*0.005));
  buffer.beginShape()
  buffer.box(20);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
    
  
  buffer.push();
  buffer.fill(235,205,84, trans1);
  buffer.stroke(255);
  buffer.push();
  buffer.translate(0, 0, 0);
  buffer.rotateX(300)
  buffer.rotateY(PI/2*sin(frameCount*0.005));
  buffer.rotateX(PI/2*sin(frameCount*0.005));
  buffer.beginShape()
  buffer.torus(450, 80);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
  
  buffer.push();
  buffer.fill(231,81,76, trans);
  buffer.stroke(255);
  buffer.push();
  buffer.translate(0,0,0);
  //buffer.rotateX(PI/4*sin(frameCount*0.05));
  buffer.rotateY(PI/2*(frameCount*0.005));
  buffer.beginShape()
  buffer.sphere(300);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  }
}