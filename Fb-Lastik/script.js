gallery = document.querySelectorAll(".gallery .image");
const btnGallery = document.querySelectorAll(".service-btn-gallery .gallery-item");

  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("#active-img"),
  closeIcon = previewBox.querySelector(".bi"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  // once window loaded
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;
      function preview() {
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        console.log(selectedImgUrl);
        previewImg.src = selectedImgUrl;
        currentImg.textContent = newIndex + 1;
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }

      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
        }
      };

      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
        }
      };

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        clickImgIndex = newIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
      };
    };
  }
};



function changeImage(fileName) {
  let img = document.querySelector(".service-img");
  img.setAttribute("src", fileName);
}

function leftSidebar() {
  document.getElementById('yanMenu').style.visibility="visible";
  document.getElementById('menuTusu').style.visibility="hidden";
  document.getElementById('yanMenu').style.animationName="menü";
  document.getAnimations
}

function closeNav(){
  document.getElementById('yanMenu').style.visibility="hidden";
  document.getElementById('menuTusu').style.visibility="visible";
}

