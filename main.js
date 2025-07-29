// Menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

menuBtn?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  if (menuBtnIcon) {
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  }
});

// Close nav on link click (mobile)
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  }
});

// Download CV
const downloadCv = document.getElementById("download-cv");

downloadCv?.addEventListener("click", () => {
  const downloadUrl = "assets/Sreenivasulu Thammisetti.pdf";
  window.open(downloadUrl, "_blank", "noopener,noreferrer");

  setTimeout(() => {
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "THAMMISETTI_SREENIVASULU_CV.pdf";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, 500);
});

// ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h4", scrollRevealOption);
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__container .header__btns", { ...scrollRevealOption, delay: 1500 });

// About section progress bars
document.querySelectorAll(".about__progressbar").forEach((bar) => {
  const progress = bar.dataset.progress;
  bar.querySelector("span").style.width = `${progress}%`;
});

ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content h4", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .about__progress", { ...scrollRevealOption, delay: 1500 });

// Services cards
ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 500 });

// Resume tab switching
const tabList = document.querySelector(".resume__tablist");

tabList?.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  document.querySelectorAll(".resume__tablist .btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabIndex);
  });

  const currentPanel = document.querySelector(".panel__grid.active");
  const targetPanel = document.querySelector(`[data-panel="${tabIndex}"]`);
  if (!targetPanel || currentPanel === targetPanel) return;

  currentPanel.classList.add("close");
  currentPanel.addEventListener(
    "animationend",
    () => {
      currentPanel.classList.remove("active", "close");
      targetPanel.classList.add("active");
    },
    { once: true }
  );
});

// Swiper setup
new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

// Blog cards reveal
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });
