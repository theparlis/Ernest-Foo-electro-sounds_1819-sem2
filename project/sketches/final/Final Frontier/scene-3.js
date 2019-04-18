function drawScene3() {
  
  let spectrum = fft.analyze();
  let trans = map(spectrum[50], 0, 80, 0, 180)
  let trans1 = map(spectrum[100], 0, 80, 0, 180)
  let spheresize1 = map(spectrum[50],0, 255, 10, 250);
  let spheresize2 = map(spectrum[50],0, 50, 100, 800);
  let spheresize3 = map(spectrum[50],0, 255, 20, 200)


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
    buffer.sphere(15); 
    buffer.endShape(CLOSE); 
    buffer.pop();
    buffer.pop();
   }
  
  buffer.push();
  buffer.fill(0,255,249, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*sin(frameCount*0.0005));
  buffer.rotateX(PI/2*sin(frameCount*0.005));
  buffer.beginShape()
  buffer.box(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
  
    buffer.push();
  buffer.fill(0,184,255, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*sin(frameCount*0.05));
  buffer.rotateX(PI/2*sin(frameCount*0.05));
  buffer.beginShape()
  buffer.box(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
    
    buffer.push();
  buffer.fill(150,0,255, trans1);
  buffer.stroke(0);
  buffer.push();
  buffer.translate(0,0,0);
  buffer.rotateY(PI/4*cos(frameCount*0.05));
  buffer.rotateX(PI/4*tan(frameCount*0.05));
  buffer.beginShape()
  buffer.box(spheresize2, spheresize2);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()

  
  
  buffer.push();
  buffer.fill(255,0,193, trans);
  buffer.stroke(255,0,193);
  buffer.push(255);
  buffer.translate(0,0,0);
  buffer.rotateY(PI/2*(frameCount*0.005));
  buffer.beginShape()
  buffer.torus(spheresize1, spheresize1);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  
  
  buffer.push();
  buffer.fill(0,184,255, trans);
  buffer.stroke(0,184,255);
  buffer.push(255);
  buffer.translate(0,0,0);
  buffer.rotateX(PI/2*(frameCount*0.005));
  buffer.beginShape()
  buffer.torus(spheresize3, spheresize3);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
  

}
  
