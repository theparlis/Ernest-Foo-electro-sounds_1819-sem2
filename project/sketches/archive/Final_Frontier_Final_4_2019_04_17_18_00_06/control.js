
function keyPressed() {
  if (key === 'f') {
    enterFullscreen();
    
  } else if(key === '1') {
    currentScene = drawScene1;
  } else if(key === '2') {
    currentScene = drawScene2;
    } else if(key === '3') {
    currentScene = drawScene3;
      } else if(key === '4') {
    currentScene = drawScene4;  
      } else if(key === '5') { 
        changeDistortion = distortion1; 
  }
}

/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
}