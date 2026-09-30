import tokenConfig from "../tokenConfig.js";
import { createIconLink } from "../utils/actionLink.js";
import { truncateAddress } from "../utils/links.js";

export function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";

  const inner = document.createElement("div");
  inner.className = "footer-inner";

  const meta = document.createElement("div");
  meta.className = "footer-meta";
  meta.innerHTML = `
    <strong>${tokenConfig.name}</strong>
    <span>$${tokenConfig.ticker}</span>
    <code title="${tokenConfig.contractAddress}">${truncateAddress(tokenConfig.contractAddress)}</code>
  `;

  const links = document.createElement("div");
  links.className = "footer-links";
  links.append(
    createIconLink({ href: tokenConfig.links.twitter, label: "X" }),
    createIconLink({ href: tokenConfig.links.telegram, label: "Telegram" }),
    createIconLink({ href: tokenConfig.links.dexscreener, label: "DexScreener" }),
    createIconLink({ href: tokenConfig.links.buy, label: "Buy" }),
    createIconLink({ href: tokenConfig.links.explorer, label: "Explorer" })
  );

  const disclaimer = document.createElement("p");
  disclaimer.className = "disclaimer";
  disclaimer.textContent =
    "This website is for informational purposes only. Always verify the contract address before interacting with any token.";

  inner.append(meta, links, disclaimer);
  footer.appendChild(inner);
  return footer;
}
