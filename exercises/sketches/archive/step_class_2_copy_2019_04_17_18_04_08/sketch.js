let t0;
let steps = [];
let beats = [];
let index = 0;
let numberOfSteps = 8;
let randomize = false;

function setup() {
  createCanvas(600, 600);
  noStroke();

  initSynths();
  newBeat();

  // create 8 Steps using a loop
  for (let i = 0; i < numberOfSteps; i++) {
    steps[i] = new Step(i, 100 + i * 30, 100);
  }
}


function initSynths() {
  t0 = new Tone.MembraneSynth();
  t0.oscillator.type = 'triangle';
  t0.chain(Tone.Master);

  t0.envelope.attack = 1.1;
  t0.envelope.decay = 0.1;
  t0.envelope.sustain = 0.6;
  t0.envelope.release = 0.1;

}

function draw() {
  background(0,128,255);

  push();
  // iterate array steps using the forEach function
  // and draw each Step
  steps.forEach((el) => {
    el.draw();
  });
  fill(0,0,255);
  translate(100 + index*30,210);
  rect(0,0,20,4);
	pop();
  
  if (frameCount % 12 === 0) {
    index = index + 1;
    if (index === numberOfSteps) {
      index = 0;
      if(randomize === true) newBeat();
    }
    steps[index].update();
  }
}

function newBeat() {
  for (let i = 0; i < numberOfSteps; i++) {
    beats[i] = floor(map(random(), 0, 1, 1, 5));
  }
  console.log(beats);
}

function triggerSound(theIndex) {
  let n = beats[theIndex];
  if (n === 1) {
    t0.triggerAttackRelease('C0', '4n');
  } else if (n === 2) {
    t0.triggerAttackRelease('F1', '16n');
  } else if (n === 3) {
    t0.triggerAttackRelease('B1', '16n');
  } else if (n === 4) {
    t0.triggerAttackRelease('D2', '4n');
  }
}


function mousePressed() {
  steps.forEach((el) => {
    el.click();
  });
}

