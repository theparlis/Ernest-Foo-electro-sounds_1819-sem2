
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
    currentScene = drawScene5;
          } else if(key === '6') {
    currentScene = drawScene6;
            } else if(key === '7') {
    currentScene = drawScene7;
              } else if(key === '8') {
    currentScene = drawScene8;
                } else if(key === '9') {
    currentScene = drawScene9;
                  } else if(key === '0') {
    currentScene = drawScene10;
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