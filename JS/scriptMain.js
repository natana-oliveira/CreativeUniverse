const OPEN_CLASS = "is-open";

function getTogglePanels() {
  return [
    document.getElementById("blackHole"),
    document.getElementById("envelope"),
    document.getElementById("contact"),
  ].filter(Boolean);
}

function closeAllPanels(except) {
  getTogglePanels().forEach((panel) => {
    if (panel !== except) panel.classList.remove(OPEN_CLASS);
  });
}

function togglePanel(panel) {
  if (!panel) return;
  const willOpen = !panel.classList.contains(OPEN_CLASS);
  closeAllPanels(panel);
  panel.classList.toggle(OPEN_CLASS, willOpen);
}

function toggleBlackHoleMessage() {
  togglePanel(document.getElementById("blackHole"));
}

function toggleCVMessage() {
  togglePanel(document.getElementById("envelope"));
}

function openContactMenu() {
  const contact = document.getElementById("contact");
  closeAllPanels(contact);
  contact.classList.add(OPEN_CLASS);
}

function closeContactMenu() {
  document.getElementById("contact").classList.remove(OPEN_CLASS);
}

function toggleContactMenu() {
  const contact = document.getElementById("contact");
  if (contact.classList.contains(OPEN_CLASS)) {
    closeContactMenu();
  } else {
    openContactMenu();
  }
}

document.addEventListener("click", (event) => {
  const openPanel = getTogglePanels().find((panel) =>
    panel.classList.contains(OPEN_CLASS),
  );
  if (openPanel && !openPanel.contains(event.target)) {
    openPanel.classList.remove(OPEN_CLASS);
  }
});

["blackHole", "envelope"].forEach((id) => {
  const panel = document.getElementById(id);
  if (panel) {
    panel.addEventListener("mouseleave", () => {
      panel.classList.remove(OPEN_CLASS);
    });
  }
});

const aboutMePhoto = document.getElementById("aboutMePhoto");
if (aboutMePhoto) {
  aboutMePhoto.addEventListener("mouseenter", () => {
    aboutMePhoto.classList.add(OPEN_CLASS);
  });
  aboutMePhoto.addEventListener("mouseleave", () => {
    aboutMePhoto.classList.remove(OPEN_CLASS);
  });
}

function toggleAboutMeImage() {
  if (aboutMePhoto) aboutMePhoto.classList.toggle("is-revealed");
}

const planetPorta = document.querySelector(".planet-porta");
if (planetPorta && window.matchMedia("(hover: none)").matches) {
  planetPorta.addEventListener("click", () => {
    planetPorta.classList.toggle(OPEN_CLASS);
  });
}
