const photosSection = document.getElementById("photos-section");
const misionVision = document.getElementById("mision-vision");
const logo = document.getElementById("logo-container");
const toggle = document.getElementById("toggle");

change = (e) => {
  e.preventDefault();
  if (photosSection.style.display == "none") {
    photosSection.style.display = "flex";
    misionVision.style.display = "none";
  } else {
    photosSection.style.display = "none";
    misionVision.style.display = "flex";
  }
};

toggle.addEventListener("click", change);
