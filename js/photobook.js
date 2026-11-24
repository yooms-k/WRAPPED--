document.addEventListener("DOMContentLoaded", () => {

  /* 
  const gridItems = document.querySelectorAll(".grid-item");
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeBtn");

  // Open modal and insert clicked image URL
  gridItems.forEach(item => {
    item.addEventListener("click", () => {
      const clickedImgSrc = item.querySelector("img").src;
      const clickedImgAlt = item.querySelector("img").alt;
      
      modal.style.display = "flex";
      modalImg.src = clickedImgSrc;
      modalImg.alt = clickedImgAlt;
    });
  });

  // Close modal when close icon 'X' is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking anywhere on the dark backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  */ 

  const folder = document.querySelectorAll(".folder");
  const foldermodal = document.getElementById("folderModal");
  const folderImg = document.getElementById("folderImg");
  const folderclose = document.getElementById("folderBtn");
  const foldernext = document.getElementById("nextBtn");
  const folderprev = document.getElementById("prevBtn"); 
  const imgcounter = document.getElementById("imgcounter");
  

  const folders = {
  fuji: [
    { src: "../images/frames/frame-13.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-01.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-02.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-03.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-04.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-05.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-06.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-07.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-08.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-09.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-10.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-11.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-12.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-13.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-14.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-15.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-16.JPG", alt: "Mt Fuji" },
    { src: "../images/frames/frame-17.JPG", alt: "Mt Fuji" },

  ],

  mstoh_cats: [
    { src: "../images/cats/DSC03419.JPG", alt: "cutie pie"}, 
    { src: "../images/cats/DSC03420.JPG", alt: "cutie pie"}, 
    { src: "../images/cats/DSC03456.JPG", alt: "cutie pie"}, 
    { src: "../images/cats/DSC03457.JPG", alt: "cutie pie"}, 
    { src: "../images/cats/DSC03458.JPG", alt: "cutie pie"}, 
    { src: "../images/cats/DSC03459.JPG", alt: "cutie pie"}, 
  ], 

  };

  folder.forEach(fold => {
    fold.addEventListener("click", () => {
      const list = folders[fold.dataset.folder];
      if (!list) return;

      currentImages = list;
      currentIndex = 0;
      render();
      foldermodal.style.display = "flex";
    }); 
  });

  folderclose.addEventListener("click", () => {
    foldermodal.style.display = "none";
  });

  foldermodal.addEventListener("click", (e) => {
    if (e.target === foldermodal) {
      foldermodal.style.display = "none";
    }
  });


  let currentImages = [];   // the photos of the folder that was clicked
  let currentIndex = 0;     // which one we're showing

  function render() {
    folderImg.src = currentImages[currentIndex].src;
    folderImg.alt = currentImages[currentIndex].alt;

    imgcounter.textContent = `${currentIndex + 1} / ${currentImages.length} `
  }

  foldernext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    render();
  });

  folderprev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    render();
  });

  let wheelLocked = false;

  foldermodal.addEventListener("wheel", (e) => {
    e.preventDefault();                // stop the page behind from scrolling
    if (wheelLocked) return;           // ignore the rest of this scroll gesture
    wheelLocked = true;
    setTimeout(() => { wheelLocked = false; }, 200);

    if (e.deltaY > 0) {                // scrolling down: next photo
      currentIndex = (currentIndex + 1) % currentImages.length;
    } else {                           // scrolling up: previous photo
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    }
    render();
  }, { passive: false });

});

// trying to use js to go to next photo 
