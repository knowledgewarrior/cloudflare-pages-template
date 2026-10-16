// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector(".lb-img");
const lbCount = lightbox.querySelector(".lb-count");
const photos = [...document.querySelectorAll(".card img")];
let current = 0;

function show(index) {
  current = (index + photos.length) % photos.length;
  const photo = photos[current];
  lbImg.src = photo.src;
  lbImg.alt = photo.alt;
  lbCount.textContent = `${current + 1} / ${photos.length}`;
}

photos.forEach((photo, i) => {
  photo.closest("button").addEventListener("click", () => {
    show(i);
    lightbox.showModal();
  });
});

lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
lightbox.querySelector(".lb-next").addEventListener("click", () => show(current + 1));

// Click on the dark area (not the photo or buttons) closes the viewer
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});
