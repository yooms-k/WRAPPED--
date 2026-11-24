import { animate, createTimer, text, utils } from "https://esm.sh/animejs";


// ----------GRAVITY TEXT!! 
const radius = 40;
const rects = [];
const animations = [];
const getRect = ($c, i) => rects[i] = $c.getBoundingClientRect();
const { chars } = text.splitText('.hero-content', { chars: true });;
console.log('chars found:', chars.length);
console.log(chars);
let pointerX = 0;
let pointerY = 0;

const animateChar = ($c, i) => {
  const anim = animations[i];
  if (anim && anim.progress < .5) return;
  const rect = rects[i];
  const dx = pointerX - (rect.left + (rect.width * .5));
  const dy = pointerY - (rect.top + (rect.height * .5));
  const distanceSquared = dx * dx + dy * dy;
  const intersect = distanceSquared <= radius * radius;
  if (intersect) {
    animations[i] = animate($c, {
      keyframes: [
        {
          x: utils.random(-radius, radius),
          y: utils.random(-radius, radius),
        },
        {
          x: 0, y: 0,
          ease: 'inOutQuad', delay: 500, duration: 1000
        }
      ],
    });
  }  
}

document.addEventListener('pointermove', (e) => {
  pointerX = e.clientX;
  pointerY = e.clientY;
});

createTimer({ onUpdate: () => chars.forEach(animateChar) });
chars.forEach(getRect);
window.addEventListener('resize', () => chars.forEach(getRect))


// ---------AUDIO BUTTON 
const audio = document.getElementById("bgmusic");
const bgmusicbtn = document.getElementById("bgmusicbtn")

bgmusicbtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        bgmusicbtn.textContent = "Pause";
    } else {
        audio.pause();
        bgmusicbtn.textContent = 'Play';
    }
});


// OPENING SEQUENCE 

window.addEventListener('load', () => {
    const site = document.getElementById('site');
    //const seed = document.getElementById('seed');

    // Small delay so the page isn't already visible before the effect starts
    setTimeout(() => {
      site.classList.add('revealed');
      seed.classList.add('hide');
    }, 150);
  });