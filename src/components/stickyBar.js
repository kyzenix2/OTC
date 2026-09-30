import tokenConfig from "../tokenConfig.js";
import { createActionLink } from "../utils/actionLink.js";
import { createCopyButton } from "../utils/copy.js";

export function renderStickyBar() {
  const bar = document.createElement("div");
  bar.className = "sticky-bar";
  bar.setAttribute("aria-label", "Quick actions");

  bar.append(
    createActionLink({
      href: tokenConfig.links.buy,
      label: "BUY",
      className: "btn btn-primary btn-bar",
    }),
    createActionLink({
      href: tokenConfig.links.dexscreener,
      label: "CHART",
      className: "btn btn-outline btn-bar",
    }),
    createCopyButton({
      value: tokenConfig.contractAddress,
      label: "COPY CA",
      className: "btn btn-ghost btn-bar",
    })
  );

  return bar;
}
