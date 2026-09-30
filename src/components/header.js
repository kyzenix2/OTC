import tokenConfig from "../tokenConfig.js";
import { createActionLink } from "../utils/actionLink.js";
import { createLogo } from "../utils/logo.js";

export function renderHeader() {
  const header = document.createElement("header");
  header.className = "site-header";

  const inner = document.createElement("div");
  inner.className = "header-inner";

  const brand = document.createElement("a");
  brand.href = "#top";
  brand.className = "brand";
  brand.appendChild(createLogo(tokenConfig, "logo logo-sm", "eager"));

  const brandText = document.createElement("div");
  brandText.className = "brand-text";
  brandText.innerHTML = `<strong>${tokenConfig.name}</strong><span>$${tokenConfig.ticker}</span>`;
  brand.appendChild(brandText);

  const nav = document.createElement("nav");
  nav.className = "header-nav";
  nav.setAttribute("aria-label", "Primary");

  const links = [
    ["Story", "#story"],
    ["How to buy", "#how-to-buy"],
    ["Chart", "#chart"],
  ];

  links.forEach(([label, href]) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    nav.appendChild(a);
  });

  const buy = createActionLink({
    href: tokenConfig.links.buy,
    label: "BUY NOW",
    className: "btn btn-primary btn-sm",
  });

  inner.append(brand, nav, buy);
  header.appendChild(inner);
  return header;
}
