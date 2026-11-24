
//step 0: mapping the file path of my images 
const FRAME_COUNT = 17; // or however many placeholders you have

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `../images/frames/frame-${String(i + 1).padStart(2, '0')}.jpg`
);

//step 1: 
const images = [];

function preloadImages(urls, onProgress) {
  let loaded = 0;
  const promises = urls.map((url, i) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      loaded++;
      onProgress(loaded / urls.length);
      resolve(img);
    };
    img.onerror = () => {
      loaded++;
      onProgress(loaded / urls.length);
      resolve(null); // don't let one bad frame block the rest
    };
    img.src = url;
    images[i] = img; // keep order stable even if loads finish out of order
  }));
  return Promise.all(promises);
}

//step 2: 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCover(img) {
  if (!img) return;
  const cw = canvas.width, ch = canvas.height;
  const ir = img.width / img.height;
  const cr = cw / ch;
  let sx, sy, sw, sh;
  if (ir > cr) {
    sh = img.height;
    sw = sh * cr;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / cr;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

function drawFrame(progress) {
  const index = Math.min(
    FRAME_COUNT - 1,
    Math.round(progress * (FRAME_COUNT - 1))
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCover(images[index]);
}

//step 3: animejs part 

import { animate, onScroll } from 'animejs'

preloadImages(FRAME_URLS, (pct) => {
  console.log(`Loading… ${Math.round(pct * 100)}%`);
}).then(() => {
  drawFrame(0); // paint the first frame before any scrolling happens

  const state = { progress: 0 };

  animate(state, {
    progress: 1,
    ease: 'linear',
    autoplay: onScroll({
      target: '.scroll-container', // the tall wrapper element
      enter: 'top top',
      leave: 'bottom bottom',
      sync: true,
    }),
    onUpdate: () => drawFrame(state.progress),
  });
});