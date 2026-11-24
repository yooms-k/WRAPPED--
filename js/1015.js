import { animate, createTimer, createTimeline, utils, onScroll, splitText } from 'animejs';

const [ container ] = utils.$('.scroll-container');
const debug  = true;  

// Animation for first square 

animate('#one .square', {
  x: '40rem',
  rotate: '1turn',
  stagger: 10, 
  autoplay: onScroll({ container,
    sync: true,
  })
});



const texts = utils.$('.text');

texts.forEach($text => {
    animate($text, {
        opacity: [0,1,0],
        x: 40, 
        scale: 2, 
        ease: "outQuad",
        autoplay: onScroll({ container, 
            sync: true, 
        })
    })
})


// Timeline

const circles = utils.$('.circle');

createTimeline({
  alternate: true,
  loop: true,
  autoplay: onScroll({
    target: circles[0],
    container, 
    debug, 

  })
})
.add(circles[2], { x: '9rem' }) //animates the rightmost circle first 
.add(circles[1], { x: '9rem' })
.add(circles[0], { x: '9rem' }); 



// section four 

const fourc = utils.$('#four .circle')
const fours = utils.$("#four .square")

createTimeline({
    alternate: true, 
    loop: true,
    autoplay: onScroll({
        target: fourc[0], 
        container, 
    })
})
.add(fourc[0],{ y: '9rem '})
.add(fours[0],{ y: '9rem '})
.add(fours[1],{ y: '9rem '})

/*
 animate('.square', {
  x: 100,
  autoplay: onScroll({
  ┌──────────────────────────┐
  │ container: '.container', │                  THIS DOES NOT MEAN THAT THE CONTAINER IS BEING ANIMATED, IT REFERS TO WHICH WINDOW WE SHOULD REFER TO FOR THE SCROLLING 
  │ target: '.section',      ├─ Settings        TARGET REFERS TO WHAT TRIGGERS THE ANIMATION 
  │ axis: 'y',               │
  └──────────────────────────┘
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true, SYNCS THE SCROLL POSITION TO THE ANIMATION TIMELINE, LIKE DRAGGING A VIDEO TIMELINE 
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
}); 
  
 */

/* NEW  SECTION */

const images = utils.$('.media');   // array of the stacked images
const steps  = utils.$('.step');    // array of the text blocks


// Remember which image is showing, so we don't redo work needlessly.
let current = 0;

// The "swap". Fade the chosen image in and every other image out.
function showImage(index) {
  if (index === current) return;    // already showing it, do nothing
  current = index;

  images.forEach(($image, i) => {
    animate($image, {
      opacity: i === index ? 1 : 0, // chosen one -> 1, all others -> 0
      duration: 500,
      ease: 'outQuad'
    });
  });
}

// One observer per step. No animation is attached here: we only want the
// callback. `i` is the step number, so step i reveals image i.
steps.forEach(($step, i) => {
  onScroll({
    container,
    target: $step,                  // THIS step is the trigger
    debug,
    enter: "center start", 
    leave: "center end",
    onEnter: () => showImage(i)     // runs when the step enters the zone
  });
});