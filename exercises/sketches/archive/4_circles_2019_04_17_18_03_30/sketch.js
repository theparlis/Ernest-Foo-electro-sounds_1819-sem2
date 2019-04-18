function setup() {
  createCanvas(400, 400);
	strokeWeight(2);
	
	
	background(255); 
	  circle(width/4,height/4,width/4)
		circle(width/2 + width/4,height/4,width/4)
		circle(width/4,height/2 + height/4 ,width/4)
		circle(width/2 + width/4,height/2 + height/4,width/4)
	
} 

function draw() { 
} 

function circle(theX, theY, theSize) { 
	push()
	translate(theX, theY)
	for(let i=0;i<150;i++) { 
			let p1 = map(random(),0,1,0,TWO_PI)
	    let p2 = map(random(),0,1,0,TWO_PI)
	    let x1 = sin(p1) * theSize; 
	    let y1 = cos(p1) * theSize; 
	    let x2 = sin(p2) * theSize; 
	    let y2 = cos(p2) * theSize; 
	line(x1,y1,x2,y2) 
}

pop()

}

	
	