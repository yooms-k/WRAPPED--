// -- WALL OF BUTTONS 

const buttons = document.querySelectorAll('.playbtn')

buttons.forEach((btn) => {
    const audioId = btn.dataset.audio; // reads the data-audio attribute 
    const audio = document.getElementById(audioId); // basically the data-audio of the button is linked to the audio id 

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btn.textContent = 'PAUSE';
        } else {
            audio.pause();
            btn.textContent = 'PLAY';
        }
    });
});



// -- ANIME JS 

import { animate, stagger, splitText, engine, utils, onScroll } from 'animejs';
// engine.defaults.loop = 5;
const $wall = document.querySelector('#wallsq');
const $circlebtn = utils.$('.circlebtn')[0]


animate($wall, {scale: .25});
animate('.square', {x: '17rem'}); 
animate('#specialsquare', {rotate: '2turn'});
animate('.row:nth-child(4) .square', {scale: [1, 5, 1]});
animate('.row:nth-child(3) .square', {z: '10rem'});

const circleanimation = animate('.circle', {
    skew: 0.5,
    x: '17rem',
    scale: [1,0.5,1],
    width: '100px', 

    autoplay: false, 
});

$circlebtn.addEventListener("click", () => {
   if (circleanimation.completed) {
        circleanimation.alternate();
        circleanimation.resume();
   } else{
    circleanimation.play();
   }
});
