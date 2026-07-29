let body = document.querySelector("body");
let themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  const isLight = !document.body.classList.contains("light");
  localStorage.setItem(THEME_STORAGE_KEY, isLight ? "light" : "dark");
  applyTheme(isLight);
});

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("navLinks");

function closeMobileMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  if (isOpen && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

const navbarEl = document.getElementById("navbar");
function updateNavbarScrolled() {
  navbarEl.classList.toggle("scrolled", window.scrollY > 10);
}
updateNavbarScrolled();
window.addEventListener("scroll", updateNavbarScrolled, { passive: true });

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mousemove", (e) => {
    const r = a.getBoundingClientRect();
    a.style.setProperty("--x", e.clientX - r.left + "px");
    a.style.setProperty("--y", e.clientY - r.top + "px");
  });
});

function spawnStars(container, count, goldRatio) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "star" + (Math.random() < goldRatio ? " gold" : "");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

spawnStars(document.getElementById("stars-bg"), 400, 0.2);

(function () {
  const stage = document.getElementById("handsContainer");
  setTimeout(() => stage.classList.add("in"), 2000);

  let exited = false;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 100 && !exited) {
        stage.classList.add("exit");
        exited = true;
      } else if (window.scrollY <= 120 && exited) {
        stage.classList.remove("exit");
        exited = false;
      }
    },
    { passive: true },
  );
})();

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("navbar").classList.add("in");
    document.querySelector(".hero-content").classList.add("in");
    document.querySelector(".scroll-hint").classList.add("in");
  }, 200);
});
