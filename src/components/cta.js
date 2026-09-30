import tokenConfig from "../tokenConfig.js";
import { createActionLink, createIconLink } from "../utils/actionLink.js";
import { createCopyButton } from "../utils/copy.js";
import { createLogo } from "../utils/logo.js";

export function renderCta() {
  const section = document.createElement("section");
  section.className = "section final-cta";
  section.id = "join";

  const inner = document.createElement("div");
  inner.className = "cta-panel fade-in";

  inner.appendChild(createLogo(tokenConfig, "logo logo-md"));

  const kicker = document.createElement("p");
  kicker.className = "kicker";
  kicker.textContent = `$${tokenConfig.ticker}`;

  const title = document.createElement("h2");
  title.textContent = tokenConfig.name;

  const slogan = document.createElement("p");
  slogan.className = "slogan";
  slogan.textContent = tokenConfig.slogan;

  const actions = document.createElement("div");
  actions.className = "action-row";
  actions.append(
    createActionLink({
      href: tokenConfig.links.buy,
      label: "BUY NOW",
      className: "btn btn-primary",
    }),
    createActionLink({
      href: tokenConfig.links.dexscreener,
      label: "VIEW CHART",
      className: "btn btn-outline",
    }),
    createCopyButton({
      value: tokenConfig.contractAddress,
      label: "COPY CA",
      className: "btn btn-ghost",
    })
  );

  const socials = document.createElement("div");
  socials.className = "social-row";
  socials.append(
    createIconLink({ href: tokenConfig.links.twitter, label: "X" }),
    createIconLink({ href: tokenConfig.links.telegram, label: "Telegram" })
  );

  inner.append(kicker, title, slogan, actions, socials);
  section.appendChild(inner);
  return section;
}
