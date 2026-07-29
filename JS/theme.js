const THEME_STORAGE_KEY = "theme";

const LIGHT_MODE_IMAGES = {
  "frameCesaeBlack.svg": "frameCesaeLight.svg",
  "arrowDoodleBlack.webp": "arrowDoodleLight.webp",
  "blackHole.webp": "blackHoleLight.webp",
  "complexJupiterBG.webp": "complexJupiterBGLight.webp",
  "coordinateBlack.webp": "coordinateLight.webp",
  "disco.webp": "discoLight.webp",
  "earth.webp": "earthLight.webp",
  "gallery.webp": "galleryLight.webp",
  "rocket.webp": "rocketLight.webp",
  "spark.webp": "sparkLight.webp",
  "starBlack.webp": "starLight.webp",
  "starsBlack.webp": "starsLight.webp",
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

(function () {
  const isLight = isLightThemeStored();
  applyTheme(isLight);
  document.addEventListener("DOMContentLoaded", () => applyTheme(isLight));
})();
