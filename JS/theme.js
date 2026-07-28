const THEME_STORAGE_KEY = "theme";

/* ---------- Modo Noturno ---------- */
const LIGHT_MODE_IMAGES = {
  "frameCesaeBlack.svg": "frameCesaeLight.svg",
  "coordinateBlack.png": "coordinateLight.png",
  "starsBlack.png": "starsLight.png",
  "disco.png": "discoLight.png",
  "gallery.png": "galleryLight.png",
  "complexJupiterBG.png": "complexJupiterBGLight.png",
  "arrowDoodleBlack.png": "arrowDoodleLight.png",
  "spark.png": "sparkLight.png",
  "starBlack.png": "starLight.png",
  "rocket.png": "rocketLight.png",
  "earth.png": "earthLight.png",
  "blackHole.png": "blackHoleLight.png",
};
const DARK_MODE_IMAGES = Object.fromEntries(
  Object.entries(LIGHT_MODE_IMAGES).map(([dark, light]) => [light, dark]),
);

function swapThemeImages(isLight) {
  const map = isLight ? LIGHT_MODE_IMAGES : DARK_MODE_IMAGES;
  document.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    const filename = src && src.split("/").pop();
    if (filename && map[filename]) {
      img.setAttribute("src", src.replace(filename, map[filename]));
    }
  });
}

function applyTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  swapThemeImages(isLight);
}

function isLightThemeStored() {
  return localStorage.getItem(THEME_STORAGE_KEY) === "light";
}

/* Aplica o tema já guardado assim que <body> existe (evita o "flash" do
   tema errado), e volta a aplicá-lo quando o DOM estiver completo, para
   trocar também as imagens (que ainda não existem neste ponto inicial). */
(function () {
  const isLight = isLightThemeStored();
  applyTheme(isLight);
  document.addEventListener("DOMContentLoaded", () => applyTheme(isLight));
})();
