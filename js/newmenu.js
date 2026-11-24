import { animate, createTimeline, createTimer, utils, onScroll } from 'animejs';

//const debug = true; 

/*
animate( '.stripe:nth-child(odd)', {
    translateX: ['-100%', '0%'],
    duration: 900,
    ease: 'outExpo',
    delay: 150,
    
});

animate( '.stripe:nth-child(even)', {
    translateX: ['100%', '0%'],
    duration: 900,
    ease: 'outExpo',
    delay: 150, 
});
*/



document.querySelectorAll('.stripe').forEach((el, i) => {
  animate(el, {
    translateX: [i % 2 === 0 ? '-100%' : '100%', '0%'],  // odd stripes from the left, even from the right
    duration: 900,
    ease: 'outExpo',
    autoplay: onScroll({
      target: el,       // this stripe decides when it plays
    }),
  });
});


//WALL OF BUTTONS 

const buttonwall = document.querySelector('.wall_buttons')

const hidebtn = document.querySelector('.hidebtn')
const revealbtn = document.querySelector('.revealbtn')

function showwall() {
  buttonwall.style.pointerEvents = 'auto';
  animate(buttonwall, {
    opacity: [0,1],
    duration: 400, 
    ease: "outQuad",
  });
}

function hidewall() { 
  animate(buttonwall, {
    opacity: [1,0],
    duration: 400, 
    ease: "outQuad",
    onComplete: () => { buttonwall.style.pointerEvents = 'none'; },
  });
}

revealbtn.addEventListener('click', showwall);
hidebtn.addEventListener('click', hidewall);


// playing audio 

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

