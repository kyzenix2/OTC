import tokenConfig from "../tokenConfig.js";
import { createActionLink, createIconLink } from "../utils/actionLink.js";
import { createCopyButton } from "../utils/copy.js";
import { createLogo } from "../utils/logo.js";
import { truncateAddress } from "../utils/links.js";

export function renderHero() {
  const section = document.createElement("section");
  section.className = "hero";
  section.id = "top";

  const visual = document.createElement("div");
  visual.className = "hero-visual";

  if (tokenConfig.banner) {
    const banner = document.createElement("img");
    banner.src = tokenConfig.banner;
    banner.alt = `${tokenConfig.name} banner`;
    banner.className = "hero-banner";
    banner.fetchPriority = "high";
    banner.decoding = "async";
    banner.width = 1600;
    banner.height = 420;
    banner.addEventListener("error", () => {
      visual.classList.add("hero-fallback");
      banner.remove();
    });
    visual.appendChild(banner);
  } else {
    visual.classList.add("hero-fallback");
  }

  const content = document.createElement("div");
  content.className = "hero-content fade-in";

  const panel = document.createElement("div");
  panel.className = "hero-panel";

  panel.appendChild(createLogo(tokenConfig, "logo logo-lg", "eager"));

  const kicker = document.createElement("p");
  kicker.className = "kicker";
  kicker.textContent = `$${tokenConfig.ticker}`;

  const title = document.createElement("h1");
  title.textContent = tokenConfig.name;

  const slogan = document.createElement("p");
  slogan.className = "slogan";
  slogan.textContent = tokenConfig.slogan;

  const description = document.createElement("p");
  description.className = "lede";
  description.textContent = tokenConfig.description;

  const caBox = document.createElement("div");
  caBox.className = "ca-box";

  const caLabel = document.createElement("span");
  caLabel.className = "ca-label";
  caLabel.textContent = `${tokenConfig.chain} CA`;

  const caValue = document.createElement("code");
  caValue.className = "ca-value";
  caValue.title = tokenConfig.contractAddress;
  caValue.textContent = truncateAddress(tokenConfig.contractAddress);

  caBox.append(caLabel, caValue);
  caBox.appendChild(
    createIconLink({
      href: tokenConfig.links.explorer,
      label: "Explorer",
      className: "icon-link",
    })
  );

  const actions = document.createElement("div");
  actions.className = "action-row";
  actions.append(
    createCopyButton({
      value: tokenConfig.contractAddress,
      label: "COPY CA",
      className: "btn btn-ghost",
    }),
    createActionLink({
      href: tokenConfig.links.buy,
      label: "BUY NOW",
      className: "btn btn-primary",
    }),
    createActionLink({
      href: tokenConfig.links.dexscreener,
      label: "VIEW CHART",
      className: "btn btn-outline",
    })
  );

  const socials = document.createElement("div");
  socials.className = "social-row";
  socials.append(
    createIconLink({ href: tokenConfig.links.twitter, label: "X" }),
    createIconLink({ href: tokenConfig.links.telegram, label: "Telegram" })
  );

  panel.append(kicker, title, slogan, description, caBox, actions, socials);
  content.appendChild(panel);
  section.append(visual, content);
  return section;
}
