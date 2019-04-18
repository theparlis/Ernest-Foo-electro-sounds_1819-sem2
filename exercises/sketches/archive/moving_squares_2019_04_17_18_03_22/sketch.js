function setup() {
  createCanvas(500, 500);
	console.log(floor(0,4))
}

function draw() { 
	 {
		background(200);
		let nx = 10;
		let ny = 10;
		let wl = width/nx;
		let hl = width/nx; 
		for(let x=0; x<nx; x++) {
			for(let y=0; y<ny; y++) {
				drawSquare(x,y, wl, hl)
			}
		}
	}
}

function drawSquare(theX, theY, theW, theH) {
noFill()
stroke(10)
push()
translate(theX*theW, theY*theH)
rect(0,0,20,20)
let n = random() < 0.5 ? 0:1
let x1 = n==1 ? floor(random()*4)*5:0
let y1 = n==0 ? floor(random()*4)*5:0

beginShape()
for(let i=0;i<10;i++) { 
	vertex(x1,y1)
	x1 = x1==0 ? floor(random() * 4)*5:0
	y1 = x1==0 ? 0:floor(random() * 4)*5
}
endShape()
pop()
}

	
	