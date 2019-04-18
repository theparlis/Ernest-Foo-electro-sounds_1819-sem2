function drawScene2() {

  buffer.background(139, 40, 0);
  buffer.rectMode(CENTER);
  
  
  buffer.push();
  for(let i=0;i<100;i++) {
    buffer.fill(0);
    buffer.rect(random(-width,width), random(-height,height),8,8);
  }
  buffer.pop();
  
  
buffer.push();
  buffer.translate(400, sin(frameCount * 0.0002) * buffer.height/2 ,sin(frameCount * 0.00002) * buffer.width/2 ,1);
  buffer.fill(255); 
  buffer.ellipse(0, 0, 70, 70);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-200, sin(frameCount * 0.00055) * buffer.height/2,sin(frameCount * 0.00075) * buffer.width/2 ,1);
  buffer.fill(204,154,244); 
  buffer.ellipse(0, 0, 80, 80);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-400, sin(frameCount * 0.0008) * buffer.height/2,tan(frameCount * 0.0008) * buffer.width/2 ,1);
  buffer.fill(0); 
  buffer.ellipse(0, 0, 70, 70);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(200, sin(frameCount * 0.0001) * buffer.height/2,sin(frameCount * 0.0001) * buffer.width/2 , 1);
  buffer.fill(154, 194, 244); 
  buffer.ellipse(0, 0, 90, 90);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-300, sin(frameCount * 0.0005) * buffer.height/2, sin(frameCount * 0.0005) * buffer.width/2, 1);
  buffer.fill(154, 244, 204); 
  buffer.ellipse(0, 0, 100, 100);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(300,  sin(frameCount * 0.00035) * buffer.height/2,sin(frameCount * 0.0005) * buffer.width/2 ,1);
  buffer.fill(255, 0, 255); 
  buffer.ellipse(0, 0, 90, 90);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(-250, sin(frameCount * 0.00062) * buffer.height/2,sin(frameCount * 0.0004) * buffer.width/2 ,1);
  buffer.fill(244, 154, 194); 
  buffer.ellipse(0, 0, 120, 120);
  buffer.pop();
  
  
    buffer.push();
  buffer.translate(-150, sin(frameCount * 0.00093) * buffer.height/2,sin(frameCount * 0.0004) * buffer.width/2 ,1);
  buffer.fill(249, 236, 210); 
  buffer.ellipse(0, 0, 80, 80);
  buffer.pop();
  
  
  buffer.push();
  buffer.translate(300, sin(frameCount * 0.00022) * buffer.height/2,sin(frameCount * 0.0004) * buffer.width/2 ,1);
  buffer.fill(250, 163, 50); 
  buffer.ellipse(0, 0, 60, 60);
  buffer.pop();

  
  buffer.push();
  buffer.translate (-250, -60 , -50); 
  buffer.fill(255);
  buffer.ellipse(255,50,350);
  buffer.pop();
}