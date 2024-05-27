const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navClose = document.getElementById("nav-close");
const hamburger = document.getElementById("hamburger");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

// scroll section active
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-titleColor");
    if (item.href.includes(current)) {
      item.classList.add("text-titleColor");
    }
  });
};
window.addEventListener("scroll", activeLink);

// scroll
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-cardColor");
    navbar.classList.add("border-b");
  } else {
    navbar.classList.remove("bg-cardColor");
    navbar.classList.remove("border-b");
  }
};

// tabs
const tabs = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll(".item-wrap");
const coffee = document.querySelectorAll(".coffee");
const snack = document.querySelectorAll(".snack");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "coffee") {
      coffee.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snack.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// review
const userPics = document.getElementsByClassName("user-pic");
const userTexts = document.getElementsByClassName("user-text");

function reviews() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// Scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  // console.log("ScrollReveal initializing...");
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 3000,
    delay: 100,
    reset: true,
  });

  sr.reveal(".home-title-ani", { origin: "bottom" });
  sr.reveal(".about-img-ani", { origin: "left" });
  sr.reveal(".about-p-ani", { origin: "right" });

  // console.log("ScrollReveal setup complete");
});
