// Sticky navbar - removing shipping message

let shippingMessageHeight = 37;

window.addEventListener("scroll", () => {
  if (shippingMessageHeight < window.scrollY) {
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").style.top = 0;
  } else {
    document.querySelector(".navbar").style.position = "relative";
    document.querySelector(".navbar").style.top = shippingMessageHeight;
  }
});

// Changing icon in navbar

let element = document.querySelector(".toggle_and_personIcon");
let ofc = document.querySelector("#sidebar");

element.addEventListener("click", iconToggler);

function iconToggler() {
  if (ofc.classList.contains("show")) {
    element.innerHTML = `
    
    <a
          href="#sidebar"
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar"
        >
          <img src="./Images/closeIcon.svg" alt="bars icon" class="bars me-3"
        /></a>

        <img src="./Images/accountIcon.svg" alt="account icon" class="ms-1" />
    `;
  } else {
    element.innerHTML = `
    <a
          href="#sidebar"
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="sidebar"
        >
          <img src="./Images/phoneMenuBars.svg" alt="bars icon" class="bars me-3"
        /></a>

        <img src="./Images/accountIcon.svg" alt="account icon" class="ms-1" />`;
  }
}

// Changing search icon

let searchElement = document.querySelector(".search_element");
let searchBar = document.querySelector("#searchbar");
let searchImage = document.querySelector("#search");
let navbarList = document.querySelector(".navbar_list");

searchElement.addEventListener("click", iconToggler2);

function iconToggler2() {
  if (searchBar.classList.contains("show")) {
    searchImage.removeAttribute("src");
    searchImage.setAttribute("src", "./Images/closeIcon.svg");
    searchImage.classList.add("close");
    navbarList.classList.add("hide");
  } else {
    searchImage.removeAttribute("src");
    searchImage.setAttribute("src", "./Images/searchIcon.svg");
    searchImage.classList.remove("close");
    navbarList.classList.remove("hide");
  }
}

// Changing image on hover 2

let smallImage = document.querySelector("#small_background_img");
let bigImage = document.querySelector("#big_background_img");

let faceBtn = document.querySelector("#faceBtn");
let eyesBtn = document.querySelector("#eyesBtn");
let lipsBtn = document.querySelector("#lipsBtn");
let skincareBtn = document.querySelector("#skincareBtn");

faceBtn.addEventListener("mouseover", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute(
    "src",
    "./Images/aWomanApplyingPowderSmallScreen.png"
  );
});

faceBtn.addEventListener("mouseout", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute("src", "./Images/aWomanWithLipstickSmallScreen.png");
});

faceBtn.addEventListener("mouseover", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanApplyingPowderBigScreen.png");
});

faceBtn.addEventListener("mouseout", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanWithLipstickBigScreen.png");
});

eyesBtn.addEventListener("mouseover", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute(
    "src",
    "./Images/aWomanApplyingMascaraSmallScreen.png"
  );
});

eyesBtn.addEventListener("mouseout", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute("src", "./Images/aWomanWithLipstickSmallScreen.png");
});

eyesBtn.addEventListener("mouseover", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanApplyingMascaraBigScreen.png");
});

eyesBtn.addEventListener("mouseout", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanWithLipstickBigScreen.png");
});

skincareBtn.addEventListener("mouseover", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute(
    "src",
    "./Images/aWomanApplyingFaceCreamSmallScreen.png"
  );
});

skincareBtn.addEventListener("mouseout", function () {
  smallImage.removeAttribute("src");
  smallImage.setAttribute("src", "./Images/aWomanWithLipstickSmallScreen.png");
});

skincareBtn.addEventListener("mouseover", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanApplyingFaceCream.png");
});

skincareBtn.addEventListener("mouseout", function () {
  bigImage.removeAttribute("src");
  bigImage.setAttribute("src", "./Images/aWomanWithLipstickBigScreen.png");
});
