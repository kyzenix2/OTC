import tokenConfig from "../tokenConfig.js";
import { createActionLink } from "../utils/actionLink.js";
import { getDexscreenerEmbedSrc } from "../utils/links.js";

export function renderChart() {
  const section = document.createElement("section");
  section.className = "section chart";
  section.id = "chart";

  const inner = document.createElement("div");
  inner.className = "section-inner fade-in";

  const intro = document.createElement("div");
  intro.className = "section-intro";
  intro.innerHTML = `
    <p class="kicker">Market</p>
    <h2>LIVE CHART</h2>
  `;

  const frame = document.createElement("div");
  frame.className = "chart-frame";

  const embedSrc = getDexscreenerEmbedSrc(tokenConfig.links.dexscreener);

  if (embedSrc) {
    const iframe = document.createElement("iframe");
    iframe.src = embedSrc;
    iframe.title = `${tokenConfig.name} DexScreener chart`;
    iframe.loading = "lazy";
    iframe.setAttribute("allow", "clipboard-write");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    frame.appendChild(iframe);
  } else {
    frame.classList.add("is-placeholder");
    frame.innerHTML = `
      <p class="chart-title">LIVE CHART</p>
      <p>Chart will appear after launch.</p>
    `;
  }

  const actions = document.createElement("div");
  actions.className = "action-row";
  actions.appendChild(
    createActionLink({
      href: tokenConfig.links.dexscreener,
      label: "OPEN DEXSCREENER",
      className: "btn btn-outline",
    })
  );

  inner.append(intro, frame, actions);
  section.appendChild(inner);
  return section;
}
