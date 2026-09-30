export function createLogo(tokenConfig, className = "logo", loading = "lazy") {
  const wrap = document.createElement("div");
  wrap.className = className;

  if (tokenConfig.logo) {
    const img = document.createElement("img");
    img.src = tokenConfig.logo;
    img.alt = `${tokenConfig.name} logo`;
    img.width = 96;
    img.height = 96;
    img.decoding = "async";
    img.loading = loading;
    img.addEventListener("error", () => {
      wrap.textContent = "LOGO";
      wrap.classList.add("logo-fallback");
      img.remove();
    });
    wrap.appendChild(img);
  } else {
    wrap.textContent = "LOGO";
    wrap.classList.add("logo-fallback");
  }

  return wrap;
}
