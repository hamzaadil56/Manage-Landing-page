let submitButton = document.getElementById("submit");

let inputText = document.getElementById("email");

let emailMessage = document.getElementById("email-message");
let validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText.value)) {
    emailMessage.style.display = "none";
    return true;
  }
  emailMessage.innerText = "Please enter valid  email";
  emailMessage.style.color = "var(--red-bright)";
  return false;
};
submitButton.addEventListener("click", (event) => {
  validateEmail();
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
let hamburgerBtn = document.getElementById("hamburger-btn");
let navLinksContainer = document.getElementById("nav-links-container");
let mainContainer = document.querySelector("main");
let index = 0;
let showLinks = () => {
  console.log("showlinks");

  navLinksContainer.classList.toggle("nav-links-container");
  if (index === 0) {
    index++;
    mainContainer.style.overflow = "hidden";
    mainContainer.style.height = "100vh";
    hamburgerBtn.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    mainContainer.style.overflow = "auto";
    hamburgerBtn.innerHTML = `<i class="fas fa-bars"></i>`;

    index = 0;
  }

  console.log(mainContainer.style.backgroundImage);
};
