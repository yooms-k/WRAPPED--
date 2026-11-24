window.addEventListener("load", () => {
    
    // HERO CONTENT 
    const hero = document.querySelector(".hero-content");

    const herocontent = {
        heroposters: [
            
            { src: "../images/heroposters/000091660015.jpg", alt: "nice poster"},
            
            { src: "../images/heroposters/DSC02474.JPG", alt: "nice poster"},
            { src: "../images/heroposters/000091660018.jpg", alt: "nice poster"},

            { src: "../images/heroposters/DSC02480.JPG", alt: "nice poster"},
            
            { src: "../images/heroposters/000067930022.jpg", alt: "nice poster"},
            


            { src: "../images/heroposters/DSC02516.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC02563.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC02618.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC02622.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC03129.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC03246.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC03323.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC03338.JPG", alt: "nice poster"},
            { src: "../images/heroposters/DSC03398.JPG", alt: "nice poster"},
        ]
        }

    const heroimg = document.getElementById("heroimg");
    const herofolder = herocontent.heroposters

    let currentIndex = 0; 

    function herorender() {
        heroimg.src = herofolder[currentIndex].src;
        heroimg.alt = herofolder[currentIndex].alt;
    }

    //time function
    function heronext() {
        currentIndex = (currentIndex + 1) % herofolder.length;
        herorender();
    }
    
    const heroTimer = setInterval(heronext, 5000); //7 seconds 

    // music 
    const buttons = document.querySelectorAll(".playbtn");
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

    //FOLDERS & MODALS 

    const folder = document.querySelectorAll(".folder");
    const foldermodal = document.getElementById("folderModal");
    const folderImg = document.getElementById("folderImg");
    const folderclose = document.getElementById("folderBtn");
    const foldernext = document.getElementById("nextBtn");
    const folderprev = document.getElementById("prevBtn"); 
    const imgcounter = document.getElementById("imgcounter");

    // for descriptions 

    const folderDesc = document.getElementById("folderDesc"); 

    const descImg = document.getElementById("descImg"); 

    // for placeholder descriptions 

    const PLACEHOLDER = {
    text: "No description yet.",
    img: "../images/realyooms.svg"   // set to null if you only want text
    };


    //ADD PHOTOS HERE

    const folders = {
    fuji: [
    { src: "../images/frames/frame-13.JPG", alt: "Mt Fuji", description: "lovely mountain innit" },
    { src: "../images/frames/frame-01.JPG", alt: "Mt Fuji", description: "hello!! "  },
    { src: "../images/frames/frame-02.JPG", alt: "Mt Fuji", description: "i am here"  },
    { src: "../images/frames/frame-03.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-04.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-05.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-06.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-07.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-08.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-09.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-10.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-11.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-12.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-13.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-14.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-15.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-16.JPG", alt: "Mt Fuji", description: ""  },
    { src: "../images/frames/frame-17.JPG", alt: "Mt Fuji", description: ""  },

    ],

    mstoh_cats: [
    { src: "../images/cats/DSC03419.JPG", alt: "cutie pie", description: "" }, 
    { src: "../images/cats/DSC03420.JPG", alt: "cutie pie", description: "" }, 
    { src: "../images/cats/DSC03456.JPG", alt: "cutie pie", description: "" }, 
    { src: "../images/cats/DSC03457.JPG", alt: "cutie pie", description: "" }, 
    { src: "../images/cats/DSC03458.JPG", alt: "cutie pie", description: "" }, 
    { src: "../images/cats/DSC03459.JPG", alt: "cutie pie", description: "" }, 
    ], 

    };

    //END OF ADD PHOTOS 

    let currentfolder = [];   // the photos of the folder that was clicked
    let currentfolderindex = 0;     // which one we're showing



    //closing each folder 
    folderclose.addEventListener("click", () => {
    foldermodal.style.display = "none";
    });

    foldermodal.addEventListener("click", (e) => {
    if (e.target === foldermodal) {
      foldermodal.style.display = "none";
    }
    });

    //render function 
    function folderrender() {
        const photo = currentfolder[currentfolderindex];

        folderImg.src = photo.src;
        folderImg.alt = photo.alt;
        imgcounter.textContent = `${currentfolderindex + 1} / ${currentfolder.length}`;

        if (photo.description) {
            // has a real description
            folderDesc.textContent = photo.description;
            descImg.style.display = "none";
        } else {
            // fall back to the placeholder
            folderDesc.textContent = PLACEHOLDER.text;
            if (PLACEHOLDER.img) {
                descImg.src = PLACEHOLDER.img;
                descImg.style.display = "block";
            } else {
                descImg.style.display = "none";
            }
        }
    }
    
    //clicking on each folder 
    folder.forEach(fold => {
    fold.addEventListener("click", () => {
        const list = folders[fold.dataset.folder];
        if (!list) return;

        currentfolder = list;
        currentfolderindex = 0;
        folderrender();
        foldermodal.style.display = "flex";
        }); 
    });


    //clicking next photo and previous photo 

    foldernext.addEventListener("click", () => {
    currentfolderindex = (currentfolderindex + 1) % currentfolder.length;
    folderrender();
    });

    folderprev.addEventListener("click", () => {
    currentfolderindex = (currentfolderindex - 1 + currentfolder.length) % currentfolder.length;
    folderrender();
    });

    
});
});

// INTRO ANIMATIONS 

import { animate, svg, stagger } from 'animejs';

const intro  = document.querySelector('#intro');
const logo   = document.querySelector('.tracelogo');
const target = document.querySelector('.logo');

async function playIntro() {
  // 1. trace the logo
  await animate(svg.createDrawable('.tracelogo path, .tracelogo circle, .tracelogo ellipse'), {
    draw: ['0 0', '0 1'],
    stroke: ['#ff7b00'],
    ease: 'outBack(1.7)',
    duration: 2000,
    delay: stagger(80),
  });

  // 2. measure where the logo is and where it needs to go
  const from = logo.getBoundingClientRect();
  const to   = target.getBoundingClientRect();

  const dx = (to.left + to.width  / 2) - (from.left + from.width  / 2);
  const dy = (to.top  + to.height / 2) - (from.top  + from.height / 2);
  const scale = to.width / from.width;

  // 3. shrink into the header while the overlay fades out
  intro.style.pointerEvents = 'none';
  animate(intro, { backgroundColor: 'rgba(17,17,17,0)', duration: 800 });
  await animate(logo, {
    x: dx,
    y: dy,
    scale,
    duration: 900,
    ease: 'inOutExpo',
  });

  // 4. swap in the real header logo and clean up
  target.style.opacity = 1;
  intro.remove();
  document.body.classList.remove('loading');
}

playIntro();