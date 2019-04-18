function drawScene1() {
  
  let spectrum = fft.analyze();
  let trans = map(spectrum[50], 0, 80, 0, 180)
  let trans1 = map(spectrum[100], 0, 80, 0, 180)
  let spheresize1 = map(spectrum[50],0, 255, 40, 400);
  let spheresize2 = map(spectrum[50],0, 50, 50, 400);


  buffer.background(0, 40, 70);
  buffer.rectMode(CENTER);
  
  
  buffer.push();
  for(let i=0;i<100;i++) {
  buffer.fill(255);
  buffer.rect(random(-width,width), random(-height,height),8,8);
  }
  buffer.pop()
  
  

   for(let i=0; i <spectrum[50]/2; i++)  { 
    buffer.push();
    buffer.fill(242, 213, 169, trans1); 
    buffer.stroke(0); 
    buffer.push(); 
    buffer.translate(random(-width, width), random(-height, height), 0);
    buffer.beginShape(); 
    buffer.box(20); 
    buffer.endShape(CLOSE); 
    buffer.pop();
    buffer.pop();
   }
  
  
  
  buffer.push();
  buffer.fill(255,1,135, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*sin(frameCount*0.0005));
  buffer.rotateX(PI/2*sin(frameCount*0.005));
  buffer.beginShape()
  buffer.torus(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
  
    buffer.push();
  buffer.fill(255,248,3, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*sin(frameCount*0.05));
  buffer.rotateX(PI/2*sin(frameCount*0.05));
  buffer.beginShape()
  buffer.torus(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
    
    buffer.push();
  buffer.fill(57,237,252, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/4*cos(frameCount*0.05));
  buffer.rotateX(PI/4*tan(frameCount*0.05));
  buffer.beginShape()
  buffer.torus(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()

  
  
  buffer.push();
  buffer.fill(161,32,0, trans);
  buffer.stroke(161,32,0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*(frameCount*0.005));
  buffer.beginShape()
  buffer.sphere(spheresize1);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  

}
  
