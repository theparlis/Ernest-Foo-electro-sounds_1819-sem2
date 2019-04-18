function drawScene9() {
  
  buffer.background(0);
  
  
  buffer.push();
  for(let i=0;i<1000;i++) {
    buffer.fill(0);
    buffer.ellipse(random(-width,width), random(-height,height),8,8);
  }
  buffer.pop();
  
  buffer.push();
  buffer.translate (-250, -60 , -50); 
  buffer.fill(255, 0, 0);
  buffer.ellipse(255,50,350);
  buffer.pop();
  

  
  buffer.push();
  buffer.translate(400, sin(frameCount * 0.02) * buffer.height/2 ,sin(frameCount * 0.02) * buffer.width/2 ,1);
  buffer.fill(255); 
  buffer.ellipse(0, 0, 70, 70);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-200, sin(frameCount * 0.008) * buffer.height/2,sin(frameCount * 0.008) * buffer.width/2 ,1);
  buffer.fill(204,154,244); 
  buffer.ellipse(0, 0, 80, 80);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-400, sin(frameCount * 0.08) * buffer.height/2,sin(frameCount * 0.008) * buffer.width/2 ,1);
  buffer.fill(0); 
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
  buffer.ellipse(0, 0, 100, 100);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(380, sin(frameCount * 0.005) * buffer.height/2,sin(frameCount * 0.005) * buffer.width/2 ,1);
  buffer.fill(255, 0, 255); 
  buffer.ellipse(0, 0, 90, 90);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-250, sin(frameCount * 0.04) * buffer.height/2,sin(frameCount * 0.04) * buffer.width/2 ,1);
  buffer.fill(244, 154, 194); 
  buffer.ellipse(0, 0, 120, 120);
  buffer.pop();
  
  
    buffer.push();
  buffer.translate(-150, sin(frameCount * 0.009) * buffer.height/2,sin(frameCount * 0.04) * buffer.width/2 ,1);
  buffer.fill(249, 236, 210); 
  buffer.ellipse(0, 0, 80, 80);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(300, sin(frameCount * 0.001) * buffer.height/2,sin(frameCount * 0.04) * buffer.width/2 ,1);
  buffer.fill(250, 163, 50); 
  buffer.ellipse(0, 0, 60, 60);
  buffer.pop();

2
  
}