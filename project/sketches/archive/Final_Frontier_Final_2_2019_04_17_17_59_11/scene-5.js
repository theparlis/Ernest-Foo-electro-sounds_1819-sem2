function drawScene5(){
  buffer.background(0, 0, 0, 20);
  drawSphere();
}

function drawSphere(){
  
  buffer.push();
  buffer.noFill();
  buffer.stroke(255);
  buffer.push();
  buffer.translate(-width/4,0,0);
  buffer.rotateX(PI/4*sin(frameCount*0.05));
  buffer.rotateY(PI/4*tan(frameCount*0.05));
  buffer.beginShape()
  buffer.sphere(400);
  buffer.endShape(CLOSE)
  buffer.pop();
  buffer.pop()
}


  
  